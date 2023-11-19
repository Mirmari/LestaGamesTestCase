import { useCallback, useMemo } from "react";

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

    const pageBack = useMemo(() => (page === 0 ? totalPage - 1 : page - 1), [
        totalPage,
        page,
    ]);

    const pageForward = useMemo(() => (page === totalPage - 1 ? 0 : page + 1), [
        totalPage,
        page,
    ]);

    const dotStart = useMemo(() => totalPage > 9 && page > 4, [
        totalPage,
        page,
    ]);

    const dotFinish = useMemo(() => totalPage > 9 && totalPage - 1 - page > 4, [
        totalPage,
        page,
    ]);

    const changeCount = useCallback((data: number) => onChangeRows(data), [
        onChangeRows,
    ]);

    const toBack = useCallback(() => onChangePage(pageBack), [
        pageBack,
        onChangePage,
    ]);

    const toForward = useCallback(() => onChangePage(pageForward), [
        pageForward,
        onChangePage,
    ]);

    const toFirstPage = useCallback(() => onChangePage(0), [onChangePage]);

    const toLastPage = useCallback(() => onChangePage(totalPage-1), [
        totalPage,
        onChangePage,
    ]);

    const classFirstPage = useMemo(() => (0 === page ? "active" : null), [
        page,
    ]);

    const classLastPage = useMemo(
        () => (totalPage - 1 === page ? "active" : null),
        [totalPage, page]
    );

    const counterPage = useMemo(() => {
        return loading || rowsPerPage < countPage ? rowsPerPage : countPage;
    }, [loading, rowsPerPage, countPage]);

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
