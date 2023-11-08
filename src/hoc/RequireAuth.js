import React from 'react';
import {Navigate, useLocation} from "react-router-dom";


const RequireAuth = ({children}) => {
    const location = useLocation();
const user = null;
if(!user){
    return <Navigate to={'/login'} state={location}/>
}
    return children
};

export default RequireAuth;