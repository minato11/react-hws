import React from 'react';
import css from "./Layout.module.css";
import {Link, Outlet, NavLink} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">About</NavLink>
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