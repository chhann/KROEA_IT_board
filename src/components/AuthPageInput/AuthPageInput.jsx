/** @jsxImportSource @emotion/react */
import * as s from "./style";

export default function AuthPageInput({ type, name, placeholder, value, onChange, onBlur, ref, message }) {
  return (
    <div>
        <input
            // css={s.input} 
            type={type} 
            name={name} 
            placeholder={placeholder} 
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
        />
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

    </div>
  )
}
