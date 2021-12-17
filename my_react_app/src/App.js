import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import BasketPage from './pages/BasketPage/BasketPage';
import {authEmail, authPassword} from './authUser.json'
import {Routes, Route, useLocation} from 'react-router-dom';
import {useEffect} from "react";

function App() {

  //useLocation для перехода со страницы авторизации на страницу товаров, не работает

  const location = useLocation()

  useEffect(() => {
    if (localStorage.getItem("credentials")) {
      const credentials = JSON.parse(localStorage.getItem("credentials"));
      console.log(authEmail)
      if (credentials.email === authEmail && credentials.password === authPassword)
        location.pathname = '/products';
    }
    else {
      localStorage.removeItem("credentials")
      location.pathname = '/login';
      console.log(location.pathname)
    }
  }, [location])


  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<LoginPage/>}/>
        <Route path={'products'} element={<MainPage/>}/>
        <Route path={'basket'} element={<BasketPage/>}/>
      </Routes>
    </div>

  )
}

export default App;