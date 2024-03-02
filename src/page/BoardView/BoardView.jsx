/** @jsxImportSource @emotion/react */
import * as S from "./style";

export default function BoardView() {
    return (
        <>
            <div css={S.board_title}>
                <div>공지사항</div>
                <p>공지사항을 빠르고 정확하게 안내해드립니다.</p>
            </div>

            <div>
                <div css={S.board_view}>
                    <div css={S.title}>
                        글 제목이 들어갑니다.
                    </div>
                    <div css={S.info}>
                        <dl>
                            <dt>번호</dt>
                            <dd>1</dd>
                        </dl>
                        <dl>
                            <dt>글쓴이</dt>
                            <dd>이이름</dd>
                        </dl>
                        <dl>
                            <dt>작성일</dt>
                            <dd>2021.1.16</dd>
                        </dl>
                        <dl>
                            <dt>조회</dt>
                            <dd>33</dd>
                        </dl>
                    </div>
                    <div css={S.cont}>
                        <div>
                            안녕하세요
                        </div>
                    </div>
                </div>
            
            
                <div css={S.bt_wrap}>
                    <button>목록</button>
                    <button>수정</button>
                </div>
            </div>

        </>
    )
}
