import ApiData from "../../../types/ApiData";


const getMokData = (): ApiData => {
    return {
        status: "ok",
        meta: {
            count: 1,
            page_total: 812,
            total: 812,
            limit: 1,
            page: 1,
        },
        data: {
            "113": {
                description:
                    "Лёгкий колёсно-гусеничный танк на базе трактора Hanomag WD-50. На вооружение машина принята не была, так как по окончании испытаний была признана устаревшей. Было выпущено несколько экземпляров трёх модификаций, три машины были проданы в Италию и в Советский Союз. На момент немецкой оккупации в Чехословакии сохранился один экземпляр танка в виде памятника.",
                name: "Kolohousenka",
                nation: "czech",
                price_credit: 0,
                default_profile: { hp: 235 },
                images: {
                    small_icon:
                        "http://api.tanki.su/static/2.75.1_lst/wot/encyclopedia/vehicle/small/czech-Cz06_Kolohousenka.png",
                },
                type: "lightTank",
                tank_id: 113,
            },
        },
    };
};

export default getMokData;