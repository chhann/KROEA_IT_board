/** @jsxImportSource @emotion/react */
import * as S from "./style"
import { Link } from "react-router-dom";
import BoardList from "../../page/BoardList/BoardList";
import { FaHome, FaUser, FaClipboardList   } from "react-icons/fa";
import SigninPage from "../../page/SigninPage/SigninPage";
import HomePage from "../../page/HomePage/HomePage";

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
    return (
        <div css={S.sideBarLayout}>
            <ul css={S.menuList}>
                {
                    SiDEMENU.map(menu =>
                        <Link 
                            css={S.menuItem} 
                            to={`${menu.path}${!menu.params ? "" : "?" + Object.entries(menu.params).map(([key, value]) => key + "=" + value).join("&")}`} 
                            key={menu.id}
                        >
                            <li>{menu.icon}</li>
                        </Link>
                    )
                }
                
                
            </ul>
        </div>
    );
}

export default SideBar;