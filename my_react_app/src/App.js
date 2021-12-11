import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import BasketPage from './pages/BasketPage/BasketPage';

import {Routes, Route, Navigate} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to ="/login" />} />
        <Route path={'products'} element={<MainPage/>}/>
        <Route path={'basket'} element={<BasketPage/>}/>
        <Route path={'login'} element={<LoginPage/>}/>
      </Routes>
    </div>
  )
}

export default App;