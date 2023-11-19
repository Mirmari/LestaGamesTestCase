import styled from "styled-components";
import {
    default_color_bg_active,
    default_color_link_hover,
} from "../../../constants/style-variables";

export default styled.div`
    display: flex;
    position: relative;
    
    min-width: 500px;
    padding: 16px 150px 0 150px;
    min-height: 50px;

    .pagination__main {
        display: flex;
        margin: 0 auto;

        div {
            margin: 0px 2px;
            cursor: pointer;
            height: 24px;
            min-width: 24px;
            padding: 4px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            user-select: none;

            &:hover {
                background-color: ${default_color_bg_active};
                color: ${default_color_link_hover};
            }

            &.active,
            &.active:hover {
                background-color: white;
            }

            &.dot:hover {
                background-color: inherit;
            }

            &.dot:hover,
            &.active:hover {
                color: inherit;
                cursor: inherit;
            }
        }

        span {
            cursor: pointer;
            margin: 0 14px;

            &:last-child svg {
                transform: rotate(180deg);
            }

            &:hover svg path {
                fill-opacity: 1;
            }
        }
    }

    div.active,
    div.active:hover {
        background-color: white;
    }
`;
