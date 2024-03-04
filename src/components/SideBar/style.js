import {css} from "@emotion/react";

export const container = css`
    box-sizing: border-box;
    position: fixed;
    top: 0;
    
    z-index: 99;
    border-right: 2px solid #000;
    width: 220px;
    height: 100%;
    transition: left 0.5s ease-in-out;
    background-color: white;
`

export const sidebar = css`
    & > a {
        text-decoration: none;
    }
    background-color: #fff;
    color:#000;
`

export const top_section = css`
    display: flex;
    align-items: center;
    padding: 20px 15px;
    & > h1 {
        font-size: 4rem;
    }
    & > div {
        display: flex;
        font-size: 3rem;
        margin-left: 30px;
    }
`

export const link = css`
    display: flex;
    color: #000;
    padding: 10px 15px;
    gap: 15px;
    transition: all 0.5s;
    font-size: 1.5rem;
    &:hover {
        background-color: rgba(0, 0, 0, 0.051);
        color:#000;
        transition: all 0.5s;
    }
`