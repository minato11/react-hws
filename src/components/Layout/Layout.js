import React from 'react';
import css from "./Layout.module.css";
import {Link, Outlet, NavLink, useNavigate} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";

const Layout = () => {
    const {logOut} = useAuth();
    const navigate = useNavigate();
    const logout = () => {
        logOut(()=>navigate('/', {replace:true}))
    }
    return (
        <div>
            <div className={css.header}>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">About</NavLink>
                <button onClick={logout}>Logout</button>
            </div>
            <div className={css.outlet}>
            <Outlet/>

            </div>
            <div className={css.footer}>
                @ReactRouterDOM
            </div>
        </div>
    );
};

export default Layout;