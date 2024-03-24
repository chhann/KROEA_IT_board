
import { Route, Routes } from 'react-router-dom'
import AuthPage from '../page/AuthPage/AuthPage'
import HomePage from '../page/HomePage/HomePage'
import { useQuery } from 'react-query'
import { getPrincipalRequest } from '../apis/api/principal';
import MyPage from '../page/MyPage/MyPage';

export default function AuthRoute() {

    const principalQuery = useQuery(["principalQuery"], getPrincipalRequest,
    {
      retry: 0,
      refetchOnWindowFocus: false,
      onSuccess: response => {
        console.log("onSuccess");
        console.log(response);
      },
      onError: error => {
        console.log("오류");
        console.log(error);
      }
    });


  return (
    <Routes>
        <Route path="/auth/*" element={ <AuthPage /> } />
        <Route path="/" element={<HomePage/>}/>
        <Route path="/account/mypage" element={<MyPage/>}/>
    </Routes>
  )
}
