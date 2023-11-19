import {useCallback, useRef, useState} from "react";
import {useModalState} from "../../../hooks/CustomHooks";

const data = [10, 12, 15];


export const usePaginationCounter = ({changed, localCount}: { changed: ((e: number) => void) | undefined, localCount: number | null }) => {
    const [countPage, setCountPage] = useState(data[0])
    const [rowsPerPage, setRowsPerPage] = useState(
        () => localCount
    );
    const {isOpen, open, close} = useModalState();

    const changeCount = useCallback(
        (d: number) => {
            setRowsPerPage(d);
            setCountPage(d);
            close();
            changed && changed(d);
        },
        [changed, close]
    );
    const wrapperRef = useRef(null);

    const openHandler = useCallback(() => {
        if (isOpen) {
            close();
        } else {
            open();
        }
    }, [isOpen, close, open]);
    return {changeCount, openHandler, wrapperRef, isOpen, data, rowsPerPage, countPage};
};
