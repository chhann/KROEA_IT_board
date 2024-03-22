import { css } from "@emotion/react";

export const inputBox = css`
    position: relative;
    width: 100%;
    height: 35px;
    border-bottom: 1px solid #000;
    margin: 30px 0;
    
    & > label {
        position: absolute;
        top: 50%;
        left: 5px;
        transform: translateY(-50%);
        font-weight: 500;
        pointer-events: none;
        transition: .2s;
        font-size: 1.1rem;
    }
    & > input {
        width:100%;
        height: 100%;
        background: transparent;
        border: none;
        outline: none;
        font-size: 1.5rem;
        font-weight: 600;
        
    }

    & > input:focus~label,
    & > input:valid~label {
        top: -5px;
        font-size: 1rem;
    }

    & > span {
        position: absolute;
        right: 8px;
        font-size: 1.7rem;
        /* line-height: 57px; */
        transform: translateY(-50%);
        top:50%;
    }
`;