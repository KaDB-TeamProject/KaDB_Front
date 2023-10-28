import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login/Integrated';
import SignUp from './components/SignUp/Integrated';
import Main from './components/Main/Integrated';
import BlogList from './components/BlogList/Integrated';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PWResetL from './components/PWResetL/Integrated';
import Individual from './components/Individual/Integrated';
import PlaceInfo from './components/PlaceInfo/Integrated';
import IndividualBlogHome from './components/IndividualBlogHome/Integrated';
import IndividualBlogPost from './components/IndividualBlogPost/Integrated';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="main" element={<Main/>}/>
          <Route path="bloglist" element={<BlogList/>}/>
          <Route path="individual" element={<Individual/>}/>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/pwresetl" element={<PWResetL/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
