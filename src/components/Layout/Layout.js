import React from 'react';
import css from "./Layout.module.css";
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <div className={css.header}>
                <Link to="/home">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/about">About</Link>
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