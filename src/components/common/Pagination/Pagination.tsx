import React from "react";
import ArrowPaginationIcon from "../../Icons/arrow-pagination";
import PaginationWrapper from "./pagination.style";
import { usePagination } from "./usePagination";
import PaginationCounter from "../PaginationCounter";

type PropTypes = {
    children?: never;
    loading?: boolean;
    count: number;
    page: number;
    countPage: number;
    onChangePage: (e: number) => void;
    onChangeRows: (e: number) => void;
    localCount?: number;
};

const Pagination: React.FC<PropTypes> = ({
    count,
    page,
    onChangePage,
    countPage,
    onChangeRows,
    loading,
    localCount = 0,
}): React.ReactElement => {
    const {
        counterPage,
        classLastPage,
        classFirstPage,
        toLastPage,
        toFirstPage,
        toForward,
        toBack,
        changeCount,
        dotFinish,
        dotStart,
        totalPage,
        totalArr,
    } = usePagination({
        count,
        page,
        onChangePage,
        countPage,
        onChangeRows,
        loading,
        localCount,
    });

    return (
        <PaginationWrapper>
            {totalPage > 1 ? (
                <div className="pagination__main" data-testid="pagination__main">
                    <span onClick={toBack}>
                        <ArrowPaginationIcon />
                    </span>
                    <div className={classFirstPage ?? ""} onClick={toFirstPage}>
                        1
                    </div>
                    {dotStart && <div className="dot">...</div>}
                    {totalArr.map((t) => (
                        <div
                            className={t === page ? "active" : ""}
                            onClick={() => onChangePage(t)}
                            key={t}
                        >
                            {t + 1}
                        </div>
                    ))}
                    {dotFinish && <div className="dot">...</div>}
                    <div className={classLastPage ?? ""} onClick={toLastPage}>
                        {totalPage}
                    </div>
                    <span onClick={toForward}>
                        <ArrowPaginationIcon />
                    </span>
                </div>
            ) : null}
            {count > 0 && (
                <PaginationCounter
                    countPage={counterPage}
                    count={count}
                    changed={changeCount}
                    localCount={localCount}
                />
            )}
        </PaginationWrapper>
    );
};

export default Pagination;
