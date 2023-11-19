import axios from "axios";
import {ChangeEvent, useEffect, useState} from "react";
import ApiData, {MetaType} from "../../../types/ApiData";
import TankDataType from "../../../types/TankDataType";
import {resolveDiacritics} from "../../utils";

const API_URL = "https://api.tanki.su/wot/encyclopedia/vehicles/"

export const getTankByName = async () => {
    return await axios
        .get(
            `${API_URL}?application_id=2b0adae8aa6efcbaf9abba08c10e8a3d&fields=nation,images.small_icon,name,type,default_profile.hp,description,price_credit,tank_id`
        )
}

const deafultValues = {page: 0, limit: 10}
const defaultMeta: MetaType = {
    total: 0, page: 0, page_total: 0, limit: 0, count: 0
}

export const useTanksView = () => {
    const [data, setData] = useState<TankDataType>()
    const [meta, setMeta] = useState<MetaType>(defaultMeta)
    const [value, setValue] = useState<string>("")
    const [loading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getTanks(deafultValues)
    },[])

    const getTanks = async ({limit = 15, page = 0}) => {
        setIsLoading(true)
        return await axios
            .get<ApiData>(
                `${API_URL}?application_id=2b0adae8aa6efcbaf9abba08c10e8a3d&fields=nation,images.small_icon,name,type,default_profile.hp,description,price_credit,tank_id&limit=
            ${limit}&page_no=${page+1}`
            ).then((res) => {
                setData(res.data.data)
                setMeta(res.data.meta)
                setIsLoading(false)
            } );
    }

    const changePage = (page: number) => {
        const payload = {
            page,
            limit: meta.limit,
        };
        getTanks(payload);

    };

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const onSearch = (name: string) => {
        if (name === "") {
            getTanks(deafultValues)
        } else {
            setIsLoading(true)
            getTankByName().then((res) => {
                for (let key in res.data.data) {
                    const name1NFD = resolveDiacritics(res.data.data[key].name)
                    const name2NFD = resolveDiacritics(name)
                    if (!name1NFD.includes(name2NFD)) delete res.data.data[key];
                }
                setData(res.data.data);
                setIsLoading(false);
            })
        }


    }

    const setRowsPerPages = (limit : number) => {
        const payload = {
            page: 0,
            limit,
        };
        getTanks(payload)
    };

    return {
        data, meta, loading, changePage, setRowsPerPages, onSearch, value, onChange
    }
}