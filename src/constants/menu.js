import BoardList from "../page/BoardList/BoardList";
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
        element:<BoardList/>
    }
]