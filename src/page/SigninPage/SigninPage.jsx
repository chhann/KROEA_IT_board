/** @jsxImportSource @emotion/react */
import * as S from "./style";

import { TiUser } from "react-icons/ti";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import AuthPageInput from "../../components/AuthPageInput/AuthPageInput";
import { useInput } from "../../hooks/userInput";
import { signinRequset } from "../../apis/api/signin";

function SigninPage(props) {
    const [ username, usernameChange ] = useInput();
    const [ password, passwordChange ] = useInput();

    const handleSigninSubmit = () => {
        signinRequset({
            username,
            password
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
    }


    return (
        <>
        <div>
            <div css={S.board_title}>
                <div>로그인</div>
                <p>아이디와 비밀번호를 입력해 주세요</p>
            </div>

            <div css={S.loginLayout}>
                <div css={S.loginContainer}>
                    <h2>Login</h2>
                    

                        <AuthPageInput type={"text"} name={"username"} value={username} onChange={usernameChange} placeholder={"Id"} icon={<TiUser/>}/>
                        <AuthPageInput type={"password"} name={"password"} value={password} onChange={passwordChange} placeholder={"Password"} icon={<RiLockPasswordFill/>}/>

                        <div css={S.rememberForgot}>
                            <label htmlFor="">
                                <input type="checkbox" />
                                Remember me
                            </label>
                            <Link>Forgot Password?</Link>
                        </div>

                        <button onClick={handleSigninSubmit}>sign in</button>
                        
                        <div>
                            <p>Don`t have an account?</p>
                            <Link>Register</Link>
                        </div>
                    
                </div>
            </div>
        </div>
        </>
    );
}

export default SigninPage;