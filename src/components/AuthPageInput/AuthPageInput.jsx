/** @jsxImportSource @emotion/react */
import * as s from "./style";


export default function AuthPageInput({ type, name, placeholder, value, onChange, onBlur, ref, message, icon }) {
  return (
    <>
    <div css={s.inputBox}>
        <span>{icon}</span>
        <input
          type={type} 
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          required
        />
        <label htmlFor="">{placeholder}</label>
    </div>
        { 
          !!message && 
          <div>
            {message.type === "error" ? "에러" : "확인" }
          </div>
        }
        {
          !!message && 
          <div>
              { message.text }
          </div>
        }
    </>
  )
}
