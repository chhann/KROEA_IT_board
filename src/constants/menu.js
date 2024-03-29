import BoardList from "../page/BoardList/BoardList";
import BoardView from "../page/BoardView/BoardView";
import BoardWrite from "../page/BoardWrite/BoardWrite";
 
export const BOARD = [
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
]