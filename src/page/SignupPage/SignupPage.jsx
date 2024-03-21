/** @jsxImportSource @emotion/react */
import * as S from "./style";

import { useNavigate } from "react-router-dom";
import { useInput } from "../../hooks/userInput";
import { useEffect, useState } from "react";
import AuthPageInput from "../../components/AuthPageInput/AuthPageInput";
import { signupRequest } from "../../apis/api/signup";

export default function SignupPage() {
    const navigate = useNavigate();
    const [ username, userNameChange, usernameMessage ,setUsernameValue, setUsernameMessage ] = useInput("username");
    const [ password, passwordChange, passwordMessage ] = useInput("password");
    const [ checkPassword, checkPasswordChange ] = useInput("checkPassword");
    const [ name, nameChange, nameMessage ] = useInput("name");
    const [ email, emailChange, emailMessage ] = useInput("email");
    const [ checkPasswordMessage, setCheckPasswordMeesage ] = useState(null);

    useEffect(() => {
        if(!checkPassword || !password) {
            setCheckPasswordMeesage(() => null);
            return;
        }

        if(checkPassword === password) {
            setCheckPasswordMeesage(() => {
                return {
                    type: "success",
                    text: ""
                }
            })
        } else {
            setCheckPasswordMeesage(() => {
                return {
                    type: "error",
                    text: "비밀번호가 일치하지 않습니다"
                }
            })
        }


    },[checkPassword, password])

    const handleSignupSubmit = () => {
        const checkFlags = [
            usernameMessage?.type,
            passwordMessage?.type,
            checkPasswordMessage?.type,
            nameMessage?.type,
            emailMessage?.type
        ];

        if(checkFlags.includes("error") || checkFlags.includes(undefined) || checkFlags.includes(null)) {
            alert("가입 정보를 다시 확인하세요.");
            return;
        }

        signupRequest({
            username,
            password,
            name,
            email
        }).then(response => {
            console.log(response);
            if(response.status === 201){
                // navigate("/auth/signin");
                
            }
        }).catch(error => {
            if(error.response.status === 400) {
                const errorMap = error.response.data;
                const errorEntries = Object.entries(errorMap);
                for(let [ k, v ] of errorEntries) {
                    if(k === "username") {
                        setUsernameMessage(() => {
                            return {
                                type: "error",
                                text: v
                            }
                        })
                    }
                }
            } else {
                alert("회원가입 오류");
            }
        });
    }




  return (
    <>
        <div css={S.board_title}>
            <div>회원가입</div>
            <p>정보를 입력해 주세요</p>
        </div>
        <div css={S.loginLayout}>
            <button onClick={handleSignupSubmit}>가입하기</button>
            <AuthPageInput type={"text"} name={"username"} placeholder={"사용자이름"} value={username} onChange={userNameChange} message={usernameMessage} />
            <AuthPageInput type={"password"} name={"password"} placeholder={"비밀번호"} value={password} onChange={passwordChange} message={passwordMessage} />
            <AuthPageInput type={"password"} name={"checkPassword"} placeholder={"비밀번호 확인"} value={checkPassword} onChange={checkPasswordChange} onBlur={null} message={checkPasswordMessage} />
            <AuthPageInput type={"text"} name={"name"} placeholder={"성명"} value={name} onChange={nameChange} message={nameMessage} />
            <AuthPageInput type={"text"} name={"email"} placeholder={"이메일"} value={email} onChange={emailChange} message={emailMessage} />
        </div>
    </>
  )
}
