import './style.scss'
import React from 'react';
import {useTanksView} from "./useTanksView";
import Pagination from "../../components/common/Pagination";
import TanksTable from "../../components/TanksTable";
import Loader from "../../components/common/Loader";
import HeaderTitle from "../../components/common/HeaderTitle";
import SearchBlock from "../../components/common/SearchBlock";

const TanksView = () => {
    const {meta, data, loading, changePage, setRowsPerPages, onSearch, value, onChange} = useTanksView()

    return (
        <div className="tank-view" data-testid="tank-view">
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