/** @jsxImportSource @emotion/react */
import * as S from "./style"
import { Link } from "react-router-dom";
import BoardList from "../../page/BoardList/BoardList";
import { FaHome, FaUser, FaClipboardList   } from "react-icons/fa";
import SigninPage from "../../page/SigninPage/SigninPage";
import HomePage from "../../page/HomePage/HomePage";
import { useQueryClient } from "react-query";
import { useEffect, useRef, useState } from "react";


export const SiDEMENU = [
    
    {
        id:1,
        path: "/",
        name: "게시글 홈",
        element:<HomePage/>,
        icon:<FaHome />
    },
    {
        id:2,
        path: "/auth/signin",
        name: "게시글 마이페이지",
        element:<SigninPage/>,
        icon:<FaUser />
    }, 
    {
        id:3,
        path: "/board/list",
        params: {
            page: 1,
        },
        name: "게시글 목록",
        element:<BoardList/>,
        icon:<FaClipboardList />
    },

]









function SideBar(props) {
    const [ isLogin, setLogin ] = useState(false);
    const queryClient = useQueryClient();
    const fileRef = useRef();

    const principalQueryState = queryClient.getQueryState("principalQuery")

    console.log(principalQueryState);

    useEffect(() => {
        setLogin(() => principalQueryState.status === "success" );
    },[principalQueryState.status]);


    const handleFileChange = () => {

    }

    return (
        <div css={S.sideBarLayout}>
            <ul css={S.menuList}>
                <Link 
                    css={S.menuItem} 
                    to='/'
                    key={1}
                >
                    <li><FaHome /></li>
                </Link>
                {
                    !isLogin
                    ? 
                    <Link 
                        css={S.menuItem} 
                        to='/auth/signin'
                        key={2}
                    >
                        <li><FaUser /></li>
                    </Link>
                    : 
                    <Link
                        css={S.menuItem} 
                        to='/account/mypage'
                    >
                    <li>
                    <input 
                        type="file" 
                        style={{
                            display: "none"
                        }}
                        onChange={handleFileChange}
                        ref={fileRef}
                    />
                        <div css={S.imgBox}>
                            <img src={
                                 
                                 "https://www.shutterstock.com/image-vector/no-image-available-picture-coming-600nw-2057829641.jpg"
                                
                            } alt="" />    
                        </div>
                    </li>
                    </Link>
                }
                
                <Link 
                    css={S.menuItem} 
                    to='/board/list?page=1'
                    key={3}
                >
                    <li><FaClipboardList /></li>
                </Link>
                
                
            </ul>
        </div>
    );
}

export default SideBar;