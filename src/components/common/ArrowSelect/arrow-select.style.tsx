import styled from "styled-components";
import { default_color_link_hover } from "../../../constants/style-variables";

export default styled.div`
    position: relative;
    width: 8px;

    span {
        position: absolute;
        top: -2px;
        left: 2px;

        &::before {
            content: "";
            display: inline-block;
            border: 4px solid rgba(16, 16, 16, 0.6);
            border-top-width: 0;
            transform: rotate(-180deg);
            margin-top: -5px;
        }

        &.active::before {
            transform: rotate(0deg);
            border-color: ${default_color_link_hover};
        }

        &::before,
        &.active::before {
            border-right-color: transparent;
            border-left-color: transparent;
        }
    }
`;
