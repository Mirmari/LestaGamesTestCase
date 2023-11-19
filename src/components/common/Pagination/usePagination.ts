import { useMemo } from "react";

export const usePagination = ({
    count,
    page,
    onChangePage,
    countPage,
    onChangeRows,
    loading,
    localCount = 0,
}: {count: number, page: number, onChangePage: any, countPage: number, loading: boolean | undefined, localCount: number, onChangeRows: any}) => {
    const rowsPerPage = localCount;
    const totalPage = useMemo(() => Math.floor(count / rowsPerPage), [
        count,
        rowsPerPage,
    ]);

    const totalArr = useMemo(() => {
        const arr = [];
        const startPage =
            totalPage < 10 || page < 5
                ? 1
                : totalPage - page < 6
                    ? page - 2 - (5 - (totalPage - page))
                    : page - 2;
        const finishPage =
            totalPage < 10 || totalPage - 1 - page < 5
                ? totalPage - 1
                : page < 5 && totalPage > 8
                    ? 7
                    : page + 3;
        for (let i = startPage; i < finishPage; i++) {
            arr.push(i);
        }
        return arr;
    }, [totalPage, page]);

    const pageBack = page === 0 ? totalPage - 1 : page - 1

    const pageForward = page === totalPage - 1 ? 0 : page + 1

    const dotStart =  totalPage > 9 && page > 4

    const dotFinish = totalPage > 9 && totalPage - 1 - page > 4

    const changeCount = (data: number) => onChangeRows(data)

    const toBack = () => onChangePage(pageBack)

    const toForward = () => onChangePage(pageForward)

    const toFirstPage = () => onChangePage(0)

    const toLastPage = () => onChangePage(totalPage-1)

    const classFirstPage = page === 0 ? "active" : null

    const classLastPage = totalPage - 1 === page ? "active" : null

    const counterPage = loading || rowsPerPage < countPage ? rowsPerPage : countPage

    return {
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
    };
};
