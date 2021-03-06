import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import BasketPage from './pages/BasketPage/BasketPage';
import ProductPage from './pages/ProductPage/ProductPage';
import {Route, Routes} from 'react-router-dom';
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<LoginPage/>}/>
        <Route path={'registration'} element={<RegistrationPage/>}/>
        <Route path={'products'} element={<MainPage/>}/>
        <Route path={'products/:id'} element={<ProductPage/>}/>
        <Route path={'basket'} element={<BasketPage/>}/>
      </Routes>
    </div>

  )
}

export default App;