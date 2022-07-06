import React from "react";
import News from "./components/News";
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./Navbar";
import BackToTop from "./components/BackToTop";
import "./components/Newsitem.css";

function App() {
  return (
    <>
    <h1 className="App "><span>N</span>ews <span>M</span>onkey</h1>
      <BrowserRouter>
      <BackToTop/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<News key='general' category={'general'}/> }/>
        <Route path='/sports' element={<News key='sports' category={'sports'}/> }/>
        <Route path='/business' element={<News key='bussiness' category={'business'}/> }/>
        <Route path='/entertainment' element={<News key='e' category={'entertainment'}/> }/>
        <Route path='/health' element={<News key='h' category={'health'}/> }/>
        <Route path='/technology' element={<News key='t' category={'technology'}/> }/>
        <Route path='/science' element={<News key='s' category={'science'}/> }/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
