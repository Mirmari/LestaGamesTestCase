import styled from "styled-components";
import {
    fontSize14,
    default_color,
    default_color_link_hover,
} from "../../../constants/style-variables";

export default styled.div`
    position: absolute;
    right: 0;
    display: flex;
    color: #707683;
    font-size: ${fontSize14};
    line-height: 15px;
    letter-spacing: 0.01em;
    top: 20px;

    > div {
        color: ${default_color};
        margin: 0 6px;
        display: flex;
        position: relative;
        cursor: pointer;

        > span {
            display: flex;
            position: relative;
        }

        > div {
            position: absolute;
            top: -55px;
            left: -100px;
            display: inline-block;
            border-radius: 4px;
            white-space: nowrap;
            background-color: white;
            padding: 16px 12px;
            box-shadow: 0px 6px 18px rgba(0, 114, 173, 0.14);

            &:after {
                content: "";
                display: block;
                position: absolute;
                left: 100px;
                bottom: -14px;
                width: 0;
                height: 0;
                border: 7px solid transparent;
                border-top-color: white;
            }

            span {
                margin-right: 6px;

                &:last-child {
                    margin-right: 0px;
                }

                &:hover {
                    color: ${default_color_link_hover};
                    cursor: pointer;
                }

                &.active {
                    opacity: 0.4;
                    cursor: inherit;
                }
            }
        }
    }
`;
