import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './header/header';
import Main from './main/main';
import Footer from './footer/footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Brand from './brands/brand';
import Login from './Login/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/brand/*' element={<Brand/>} />
        <Route path='/login' element={<Login/>} />
        {/* <Route path="/rolex" element={<Rolexcardcomponent/>}/>
        <Route path="/hublot" element={<Hublotcardcomponent/>}/> */}
      </Routes>
    </BrowserRouter>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
