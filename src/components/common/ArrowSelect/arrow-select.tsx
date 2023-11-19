import * as React from "react";
import ArrowSelectWrapper from "./arrow-select.style";

type PropTypes = {
    active?: boolean;
    children?: never;
};

const ArrowSelect: React.FC<PropTypes> = ({ active }): React.ReactElement => {
    return (
        <ArrowSelectWrapper>
            <span className={active ? "active" : ""} />
        </ArrowSelectWrapper>
    );
};

ArrowSelect.defaultProps = {
    active: true,
};

export default ArrowSelect;
