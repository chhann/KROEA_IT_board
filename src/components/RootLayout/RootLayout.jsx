/** @jsxImportSource @emotion/react */
import * as S from "./style"

export default function RootLayout({children}) {
    return (
        <>
            <div css={S.layout}>
                {children}
            </div>
        </>
    )
}
