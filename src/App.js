import React from 'react'
import {Routes, Route, Link} from "react-router-dom";


import css from "./App.module.css"
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import Layout from "./components/Layout/Layout";
function App(){
    return (
     <>

         <Routes>
             <Route path={'/'} element={<Layout/>}>
                <Route path={'/home'} element={<HomePage/>}/>
                <Route path={'/users'} element={<UsersPage/>}/>
                <Route path={'/posts'} element={<PostsPage/>}/>
                <Route path={'/about'} element={<AboutPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
             </Route>
         </Routes>
     </>
    );
};

export default App;