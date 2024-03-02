/** @jsxImportSource @emotion/react */
import * as S from "./style";

import { useLoadListByPageNumber } from "../../hooks/boardListHook";
import { Link, useNavigate, useSearchParams } from "react-router-dom";


export default function BoardList() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const page = parseInt(searchParams.get("page"));
    
    const { boardList, pageNumbers, totalPageCount, startPageNumber } = useLoadListByPageNumber(page);
    
    
    return (
        <>
            <div css={S.board_title}>
                <div>KOREA IT 게시판</div>
                <p>공지사항을 빠르고 정확하게 안내해드립니다.</p>
            </div>
            <div>
                <div css={S.board_list}>
                    <div css={S.top}>
                        <div css={S.num}>번호</div>
                        <div css={S.title}>제목</div>
                        <div css={S.writer}>글쓴이</div>
                        <div css={S.date}>작성일</div>
                        <div css={S.count}>조회</div>
                    </div>
                    {boardList.map((board, index) =>
                        <div key={board.boardId}>
                            <div css={S.num}>{(page-1)*10 + (index+1)}</div>
                            <div css={S.title}>{board.boardTitle}</div>
                            <div css={S.writer}>{board.boardWriter}</div>
                            <div css={S.date}>{board.boardDate}</div>
                            <div css={S.count}>조회</div>
                        </div>    
                    )}
                </div>
                
                <div css={S.board_page}>
                    <Link to={`/board/list?page=${1}`} css={S.bt}>F</Link>
                    <Link to={`/board/list?page=${startPageNumber === 1 ? 1 : startPageNumber - 1}`} css={S.bt}>&#60;&#60;</Link>
                    <Link to={`/board/list?page=${page - 1 === 0 ? 1 : page - 1}`} css={S.bt}>&#60;</Link>
                    
                    {pageNumbers.map(pageNumber =>
                        <Link 
                            to={`/board/list?page=${pageNumber}`} 
                            css={ pageNumber === page ? S.numsOn : S.nums }
                        >
                            {pageNumber}
                        </Link>
                    )}
                    
                    <Link to={`/board/list?page=${page + 1 < totalPageCount ? page + 1 : totalPageCount}`} css={S.bt}>&#62;</Link>
                    <Link to={`/board/list?page=${startPageNumber + 5 < totalPageCount ? startPageNumber + 5 : totalPageCount}`} css={S.bt}>&#62;&#62;</Link>
                    <Link to={`/board/list?page=${totalPageCount}`} css={S.bt}>L</Link>
                </div>
                <div css={S.bt_wrap}>
                    <button onClick={() => { navigate("/board/write") }}>글쓰기</button>
                </div>
            </div>
        </>
    )
}
