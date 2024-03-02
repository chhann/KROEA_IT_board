/** @jsxImportSource @emotion/react */
import * as S from "./style";
import ReactQuill from "react-quill";
import { QUILL_MODULES } from "../../constants/quillModules";

import "../../constants/quill-styles.css"


import { useMaxSizePasswordValidateInput, useMaxSizeTitleValidateInput, useMaxSizeWriterValidateInput, useQuillInput } from "../../hooks/inputHook";
import { useNavigate } from "react-router-dom";
import { useLoadList } from "../../hooks/boardListHook";



export default function BoardWrite() {
    const navigate = useNavigate();

    // 훅들
    const [ inputTitleValue, handleInputTitleChange ] = useMaxSizeTitleValidateInput(20);
    const [ inputWriterValue, handleInputWriterChange ] = useMaxSizeWriterValidateInput(9);
    const [ inputPasswordValue, handleInputPasswordChange ] = useMaxSizePasswordValidateInput(4);
    const [ quillValue, handleQuillValueChange ] = useQuillInput("");
    const { boardList, lastId } = useLoadList();

    const converDataKor = (curruntDate) => {
        const year = curruntDate.getFullYear();
        const month = curruntDate.getMonth();
        const date = curruntDate.getDate();
        return `${year}.${month}.${date}`
    }

    const handleSubmitClick = () => {
        console.log(inputTitleValue);
        if(inputTitleValue === "") {
            alert("글 제목을 적어주세요")
            return
        } else if(inputWriterValue === "") {
            alert("글쓴이를 적어주세요")
            return
        } else if (inputPasswordValue === "") {
            alert("비밀번호를 적어주세요")
            return
        } else if (quillValue === "") {
            alert("내용을 적어주세요")
            return
        }

        let newBoardList = [];

        const board = {
            boardId: lastId + 1,
            boardTitle: inputTitleValue,
            boardWriter: inputWriterValue,
            boardPassword: inputPasswordValue,
            boardDate:converDataKor(new Date()),
            boardContent: quillValue
        }

        newBoardList = [...boardList, board];

        localStorage.setItem("boardList", JSON.stringify(newBoardList));
        alert("글 작성 완료.");
        navigate("/board/list?page=1");
    }



    return (
        <>
            <div css={S.board_title}>
                <div>공지사항</div>
                <p>공지사항을 빠르고 정확하게 안내해드립니다.</p>
            </div>
            <div>
                <div css={S.board_write}>
                    <div css={S.title}>
                        <dl>
                            <dt>제목</dt>
                            <dd>
                                <input 
                                    type="text" 
                                    placeholder="제목 입력"
                                    onChange={handleInputTitleChange}
                                    value={inputTitleValue}
                                />
                            </dd>
                        </dl>
                    </div>
                    <div css={S.info}>
                        <dl>
                            <dt>글쓴이</dt>
                            <dd>
                                <input 
                                    type="text" 
                                    placeholder="글쓴이 입력" 
                                    onChange={handleInputWriterChange}
                                    value={inputWriterValue}
                                />
                            </dd>
                        </dl>
                        <dl>
                            <dt>비밀번호</dt>
                            <dd>
                                <input 
                                    type="password" 
                                    placeholder="비밀번호 입력"
                                    onChange={handleInputPasswordChange}
                                    value={inputPasswordValue}
                                />
                            </dd>
                        </dl>
                    </div>
                    <div css={S.cont}>
                        <ReactQuill
                            style={{
                                width: "100%",
                                height: "400px",
                            }} 
                            modules={QUILL_MODULES}
                            onChange={handleQuillValueChange}
                            value={quillValue}
                        />
                    </div>
                </div>

                <div css={S.bt_wrap}>
                    <button onClick={handleSubmitClick}>등록</button>
                    <button onClick={() => { navigate("/board/list?page=1") }}>취소</button>
                </div>
            </div>
        </>

    )
}
