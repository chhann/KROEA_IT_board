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

export const loginLayout = css`
    position: relative;
    background: transparent;
    width: 100%;
    /* border: 2px solid rgba(255, 255, 255, .5); */
    border-top: 2px solid #000;
    border-bottom: 1px solid #000;
    /* backdrop-filter: blur(20px); */
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const loginContainer = css`
    padding: 40px;

    & > h2 {
        font-size: 2.5rem;
        font-weight: 500;
        text-align: center;
    }
`

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

// export const inputLine = css`
//     padding: 0 35px 0 5px;
// `

export const rememberForgot = css`
    font-size: 1.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: -20px 0 20px;

    & > label > input {
        accent-color: #000;
        margin-right: 3px;
    }
`;