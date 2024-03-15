import {css} from "@emotion/react";

export const sideBarLayout = css`
    width: 100%;
    height: 50px;
    
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;

    margin-top: -50px;
    margin-bottom: 30px;
`

export const menuList = css`
    height: 100%;
    display: flex;
    
    justify-content: space-between;
    align-items: center;

`

export const menuItem = css`
    border: 0px solid black;
    width: 333px;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    
    text-decoration: none;
    color: #000;
    font-size: 2rem;
    

    &:hover {
        background-color: rgba(0, 0, 0, 0.061);
        transition: 0.3s;
    }

    &:active {
        background-color: rgba(0, 0, 0, 0.347);
    }
    

`