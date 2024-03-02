import {css} from "@emotion/react";

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
export const board_view = css`
    width: 100%;
    border-top:2px solid #000;
`

export const title = css`
    padding: 20px 15px;
    border-bottom: 1px dashed #ddd;
    font-size: 2rem;
`

export const info = css`
    padding: 15px;
    border-bottom: 1px solid #999;
    font-size: 0;
    & > dl {
        display: inline-block;
        padding: 0 20px;
        position: relative;
        @media (max-width: 1000px) {
            width: 50%;
            padding: 0;
        }
    }
    & > dl:nth-child(-n+2) {
        @media (max-width: 1000px) {
            margin-bottom: 5px;
        }
    }
    & > dl:first-child {
        padding-left: 0 ;
    }
    & > dl::before {
        content: "";
        position: absolute;
        top: 3px;
        left: 0;
        display: block;
        width: 1px;
        height: 13px;
        background: #ddd;
        @media (max-width: 1000px) {
            display: none;
        }
    }
    & > dl:first-child::before {
        display: none;
    }
    & > dl > dt, dl > dd {
        display: inline-block;
        font-size: 1.4rem;
        @media (max-width: 1000px) {
            font-size: 1.2rem;
        }
    }
    & > dl > dd {
        margin-left: 10px;
        color: #777;
    }
    
`
export const cont = css`
    padding: 15px;
    border-bottom: 1px solid #000;
    line-height: 160%;
    font-size: 1.4rem;
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
    

    & > button:nth-child(2) {
        background-color: #fff;
        color: #000;
        /* what */
        min-width: 100px; 
        margin-left: 10px;
        padding: 10px;
        border: 1px solid #000;
        border-radius: 2px;
        font-size: 1.4rem;
        
        cursor: pointer;
    }
    & > button:nth-child(2):hover{
        background-color: rgba(0, 0, 0, 0.061);
        border: 1px solid rgba(0, 0, 0, 0.061);
        transition: 0.4s;
    }
    & > button:nth-child(2):active {
        background-color: rgba(0, 0, 0, 0.347);
        border: 1px solid rgba(0, 0, 0, 0.347);
    }
`