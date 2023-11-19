import './style.scss'
import React from 'react';
import TanksTable from "../../TanksTable";
import Pagination from "../../common/Pagination";
import {useTanksView} from "./useTanksView";
import SearchBlock from "../../SearchBlock";
import HeaderTitle from "../../HeaderTitle";
import Loader from "../../common/Loader";

const TanksView = () => {
    const {meta, data, loading, changePage, setRowsPerPages, onSearch, value, onChange} = useTanksView()

    return (
        <div className="tank-view">
            <HeaderTitle title="Tanks View by tankopedia"/>
            <SearchBlock value={value} onChange={onChange} onSearch={onSearch}/>
            {loading ? <Loader/> : <TanksTable data={data}/>}
            <div className="tank-view-pagination">
                <Pagination
                    countPage={meta?.page_total}
                    count={meta?.total > 0 ? meta?.total : 0}
                    localCount={meta?.count}
                    page={meta?.page - 1}
                    onChangePage={changePage}
                    onChangeRows={setRowsPerPages}
                    loading={loading}
                />
            </div>
        </div>
    );
};


export default TanksView;