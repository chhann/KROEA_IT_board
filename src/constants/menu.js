import BoardHome from "../page/BoardHome/BoardHome";
import BoardList from "../page/BoardList/BoardList";
import BoardMyPage from "../page/BoardMyPage/BoardMyPage";
import BoardView from "../page/BoardView/BoardView";
import BoardWrite from "../page/BoardWrite/BoardWrite";

export const MENU = [
    {
        id:1,
        path: "/board/write",
        name:"게시글 작성",
        element:<BoardWrite/>
    },
    {
        id:2,
        path: "/board/list",
        params: {
            page: 1,
        },
        name: "게시글 목록",
        element:<BoardList/>,
        icon:"게시글아이콘"
    },
    {
        id:3,
        path: "/board/view",
        params: {
            boardId: 1,
        },
        name: "게시글 뷰",
        element:<BoardView/>
    },
    {
        id:4,
        path: "/board/home",
        name: "게시글 홈",
        element:<BoardHome/>,
        icon:"홈아이콘"
    },
    {
        id:5,
        path: "/board/mypage",
        name: "게시글 마이페이지",
        element:<BoardMyPage/>,
        icon:"마이페이지아이콘"
    }
]