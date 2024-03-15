/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import * as S from "./style"
import BoardHome from "../page/BoardHome/BoardHome";
import BoardMyPage from "../page/BoardMyPage/BoardMyPage";
import BoardList from "../page/BoardList/BoardList";
import { FaHome, FaUser, FaClipboardList   } from "react-icons/fa";

export const SiDEMENU = [
    
    {
        id:1,
        path: "/board/home",
        name: "게시글 홈",
        element:<BoardHome/>,
        icon:<FaHome />
    },
    {
        id:2,
        path: "/board/mypage",
        name: "게시글 마이페이지",
        element:<BoardMyPage/>,
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
[1, 2, 3] = a

[{a:2},{b:4},{c:5}] = b





c.map((number) => <div>{number.a.t}</div>)


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