/** @jsxImportSource @emotion/react */
import * as S from "./style";

import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useMemo } from "react";

export default function BoardView() {
    const location = useLocation();
    const navigate = useNavigate();
    
    const page = location.state;

    const [searchParams] = useSearchParams();
    const id = parseInt(searchParams.get("boardId"));

    const bardList = useMemo(() => {
        const lsBoardList = localStorage.getItem("boardList");
        return !lsBoardList ? [] : JSON.parse(lsBoardList);
    } ,[])

    const findBoard = bardList.filter((board) => 
        board.boardId === id
    )    

    const { boardTitle, boardContent, boardDate, boardWriter, boardId } = findBoard[0]
    

    return (
        <>
            <div css={S.board_title}>
                <div>KOREA IT 게시판</div>
                <p>공지사항을 빠르고 정확하게 안내해드립니다.</p>
            </div>
            
            {<>
                <div css={S.board_view}>
                    <div css={S.title}>
                        {boardTitle}
                    </div>
                    <div css={S.info}>
                        <dl>
                            <dt>번호</dt>
                            <dd>{boardId}</dd>
                        </dl>
                        <dl>
                            <dt>글쓴이</dt>
                            <dd>{boardWriter}</dd>
                        </dl>
                        <dl>
                            <dt>작성일</dt>
                            <dd>{boardDate}</dd>
                        </dl>
                        <dl>
                            <dt>조회</dt>
                            <dd>33</dd>
                        </dl>
                    </div>
                    <div css={S.cont}>
                        <div dangerouslySetInnerHTML={{ __html: boardContent }}>
                            {/* `{boardContent}` */}
                        </div>
                    </div>
                </div>

            </>}
            <div>
                <div css={S.bt_wrap}>
                    <button onClick={() => { navigate(`/board/list?page=${page}`)}}>목록</button>
                    <button>수정</button>
                </div>
            </div>

        </>
    )
}
