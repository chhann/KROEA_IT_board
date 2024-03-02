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

export const board_write = css`
    border-top: 2px solid #000;
`

export const title = css`
    padding: 15px;

    & > dl {
        font-size: 0px;
    }
    & > dl > dt {
        display: inline-block;
        vertical-align: middle;
        font-size: 1.4rem;
        width: 100px;
        @media (max-width: 1000px) {
            display: none;
            
        }
    }
    & > dl > dd {
        display: inline-block;
        vertical-align: middle;
        font-size: 1.4rem;
        width: calc(100% - 100px);
        @media (max-width: 1000px) {
            width: 100%;
        }
    }
    & > dl > dd > input[type="text"] {
        padding: 10px;
        box-sizing: border-box;
        width: 80%;
        @media (max-width: 1000px) {
            width: 100%;
        }
    }
`

export const info = css`
    padding: 15px;

    border-top: 1px dashed #ddd; 
    border-bottom: 1px solid #000;
    font-size: 0;

    
    & > dl {
        display: inline-block;
        width: 50%;
        vertical-align: middle;
        @media (max-width: 1000px) {
            width: 49%;
        }
    }
    /* 물어보기 !!! 
    *  왜 first-child에 적용해야되는지 
    * 그냥 dl에 붙으면 왜 안되는지
    */
    & > dl:first-child{
        @media (max-width: 1000px) {
            margin-right: 2%;
        }
    }
    & > dl > dt {
        display: inline-block;
        vertical-align: middle;
        font-size: 1.4rem;
        width: 100px;
        @media (max-width: 1000px) {
            display: none;
        }
    }
    & > dl > dd {
        display: inline-block;
        vertical-align: middle;
        font-size: 1.4rem;
        @media (max-width: 1000px) {
            width: 100%;
        }
    }

    & > dl > dd > input[type="text"] {
        padding: 10px;
        box-sizing: border-box;
        @media (max-width: 1000px) {
            width: 100%;
        }
    }
    & > dl > dd > input[type="password"]{
        padding: 10px;
        box-sizing: border-box;
        @media (max-width: 1000px) {
            width: 100%;
        }
    }
`

export const cont = css`
    padding-bottom: 42px;
    border-bottom: 1px solid #000;
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

