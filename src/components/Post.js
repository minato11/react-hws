import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post}) => {
    const {id,title} = post
    return (
        <div>
            <Link to={id.toString()} stat={post}>Tittle: {title}</Link>
        </div>
    );
};

export default Post;