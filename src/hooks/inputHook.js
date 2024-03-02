import { useState } from "react";

// title input 제목글 길이 제한 
export function useMaxSizeTitleValidateInput(maxSize) {
    const [ inputTitleValue, setInputTitleValue ] = useState("");

    const onChange = (e) => {
        const { value } = e.target;
        if(value.length <= maxSize) {
            setInputTitleValue(() => value);
        }
    }

    return [ inputTitleValue, onChange ];
}

// Writer input 작성자 길이 제한
export function useMaxSizeWriterValidateInput(maxSize) {
    const [ inputWriterValue, setInputWriterValue ] = useState("");

    const onChange = (e) => {
        const { value } = e.target;
        if(value.length <= maxSize) {
            setInputWriterValue(() => value);
        }
    }

    return [ inputWriterValue, onChange ];
}

//Password input 비밀번호 길이 제한
export function useMaxSizePasswordValidateInput(maxSize) {
    const [ inputPasswordValue, setInputPasswordValue ] = useState("");

    const onChange = (e) => {
        const { value } = e.target;
        if(value.length <= maxSize) {
            setInputPasswordValue(() => value);
        }
    }

    return [ inputPasswordValue, onChange ];
}

export function useQuillInput() {
    const [ quillValue, setQuillValue ] = useState("");

    const onChange = (value) => {
        setQuillValue(() => value);
    }

    return [ quillValue,onChange ];
}