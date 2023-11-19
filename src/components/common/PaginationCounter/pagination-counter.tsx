import React from "react";
import ArrowSelect from "../ArrowSelect";
import PaginationCounterWrapper from "./pagination-counter.style";
import { usePaginationCounter } from "./use-pagination-counter";

type PropTypes = {
    countPage: number;
    count: number;
    changed?: (e: number) => void | undefined;
    localCount?: number;
    children?: never;
};

const PaginationCounter: React.FC<PropTypes> = ({
    countPage,
    count,
    changed,
    localCount = null,
}): React.ReactElement => {
    const {
        changeCount,
        openHandler,
        wrapperRef,
        isOpen,
        data,
        rowsPerPage,
    } = usePaginationCounter({
        changed,
        localCount,
    });
    return (
        <PaginationCounterWrapper>
            Показано
            <div ref={wrapperRef}>
                <span onClick={openHandler} style={{color: "white"}}>
                    {countPage} <ArrowSelect active={isOpen} />
                </span>
                {isOpen && (
                    <div>
                        {data.map((d, i) => (
                            <span
                                key={i}
                                className={rowsPerPage === d ? "active" : ""}
                                onClick={() => changeCount(d)}
                            >
                                {d}
                            </span>
                        ))}
                    </div>
                )}
            </div>
            {countPage !== count ? <>из {count}</> : null}
        </PaginationCounterWrapper>
    );
};


export default PaginationCounter;
