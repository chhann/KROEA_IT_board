/** @jsxImportSource @emotion/react */
import * as S from "./style";

import { NavLink } from 'react-router-dom';
import {
    FaBars,
    FaHome,
    FaThList, FaUserAlt,
} from "react-icons/fa";


function SideBar({childarn}) {
    const menuItem=[
        {
            path: "/board/list?page=1",
            name: "게시글 목록",
            icon:<FaThList/>
        },
        {
            path: "/board/home",
            name: "게시글 홈",
            icon:<FaHome />
        },
        {
            path: "/board/mypage",
            name: "게시글 마이페이지",
            icon:<FaUserAlt/>
        }
    ]

    return (
        <div css={S.container}>
            <div css={S.sidebar}>
                <div css={S.top_section}>
                    <h1 className='bars'>LOGO</h1>
                    <div>
                        <FaBars/>
                    </div>
                </div>
                {
                    menuItem.map((item, index) => 
                        <NavLink 
                            to={item.path} 
                            key={index} 
                            css={S.link}
                            activeclassName='active'
                        >
                            <div className="icon">{item.icon}</div>
                            <div className="link_text">{item.name}</div>
                        </NavLink>        
                    )
                }
            </div>
            <main>
                {childarn}
            </main>
        </div>
    );
}

export default SideBar;