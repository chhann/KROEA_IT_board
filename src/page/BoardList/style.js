import { css } from "@emotion/react";

export const board_title = css`
    margin-bottom: 30px; 

    & > div {
        font-weight: 600;
        font-size: 3rem;
    }
    & > p {
        margin-top: 10px;
        font-size: 1.4rem;
    }
`

export const board_list = css`
    width: 100%;
    border-top: 2px solid #000; 
    & > div {
        border-bottom: 1px solid #ddd;
        font-size: 0;
    }

    & > div:last-child {
    border-bottom: 1px solid #000;
    }

    & > div > div {
        display: inline-block;
        padding: 15px 0;
        text-align: center;
        font-size: 1.4rem;
    }

    & > div:nth-child(n+2):hover {
        background-color: #dbdbdb37;
        transition: 0.2s;
    }
`

export const top = css`
    border-bottom: 1px solid #999;
    font-weight: 600;
    

    & > div > div:nth-of-type(2) {
        width: 60%;
        text-align: left;
        @media (max-width: 1000px) {
            text-indent: 0px !important;
        }
    }
`

export const num = css`
    width: 10%;
    @media (max-width: 1000px) {
        display: none !important;
    }
`

export const title = css`
    width: 60%;
    text-align: left;
    @media (max-width: 1000px) {
        text-indent: 10px !important;
    }
`

export const writer = css`
    width: 10%;
    @media (max-width: 1000px) {
        display: none !important;
    }
`

export const date = css`
    width: 10%;
    @media (max-width: 1000px) {
        width: 40% !important;
    }
`

export const count = css`
    width: 10%;
    @media (max-width: 1000px) {
        display: none !important;
    }
`

export const bt_wrap = css` 
margin-top: 30px;
text-align: center;
font-size: 0;
    & > button:nth-child(1) {
        background-color: #000;
        color: #fff;
        /* what */
        min-width: 100px; 
        padding: 10px;
        border: 1px solid #000;
        border-radius: 2px;
        font-size: 1.4rem;
        
        cursor: pointer;
    }
    & > button:nth-child(1):hover {
        background-color: #000000bb;
        border: 1px solid #000000bb;
        transition: 0.4s;
    }
    & > button:nth-child(1):active {
        background-color: #00000064;
        border: 1px solid #00000064;
    }
`

export const board_page = css`
    margin-top: 30px;
    text-align: center;
    font-size: 0;
    & > a {
        text-decoration: none;
        color: inherit;

        display: inline-block;
        width: 32px;
        height: 32px;
        box-sizing: border-box;
        vertical-align: middle;
        border: 1px solid #ddd;
        border-left: 0;
        line-height: 100%;
        @media (max-width: 1000px) {
            width: 26px;
            height: 26px;
        }
    }
    & > a:hover {
        background-color: rgba(0, 0, 0, 0.051);
        transition: 0.4s;
    }
    & > a:active {
        background-color: rgba(0, 0, 0, 0.347);
    }
    & > a:first-child {
    border-left: 1px solid #ddd;
}
`

export const bt = css`
    padding-top: 7px;
    font-size: 1.2rem;
    letter-spacing: -1px;
    @media (max-width: 1000px) {
            padding-top: 5px;
        }

`

export const nums = css`
    padding-top: 7px;
    font-size: 1.4rem;
    @media (max-width: 1000px) {
        padding-top: 5px;
    }
`

export const numsOn = css`
    padding-top: 7px;
    font-size: 1.4rem;

    border-color: black;
    background: #000;
    color: #eee !important;
    @media (max-width: 1000px) {
        padding-top: 4px;
    }
    &:hover {
        background-color: #000000bb !important;
        transition: 0.4s;
    }
    &:active {
        background-color: #00000064 !important;
    }
`