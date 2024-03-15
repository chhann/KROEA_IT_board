import {css} from "@emotion/react";

export const layout = css`
    width: 1000px;
    margin: 70px auto;
    @media (max-width: 1000px) {
        width: 100%;
        min-width: 320px;
        padding: 0 30px;
        box-sizing: border-box;
    }
    

    & > ul, li {
        list-style: none;
    }
    /* & > a {
        text-decoration: none;
        color: inherit;
    } */
`