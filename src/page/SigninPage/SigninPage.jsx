/** @jsxImportSource @emotion/react */
import * as S from "./style";

import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function SigninPage(props) {
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
                    <form>
                        <div css={S.inputBox}>
                            <span><MdEmail/></span>
                            <input type="text" css={S.inputLine} required/>
                            <label htmlFor="">Email</label>
                        </div>

                        <div css={S.inputBox}>
                            <span><RiLockPasswordFill/></span>
                            <input type="password" required/>
                            <label htmlFor="">Password</label>
                        </div>

                        <div css={S.rememberForgot}>
                            <label htmlFor="">
                                <input type="checkbox" />
                                Remember me
                            </label>
                            <Link>Forgot Password?</Link>
                        </div>

                        <button>sign in</button>
                        
                        <div>
                            <p>Don`t have an account?</p>
                            <Link>Register</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}

export default SigninPage;