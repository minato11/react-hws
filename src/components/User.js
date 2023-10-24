import React from 'react';

const User = ({user:{id, name, email}, getUserId}) => {
    return (
        <div>
            {id}--{name}--{email}
            <button onClick={()=>getUserId(id)}>Get Id</button>
        </div>
    );
};

export default User;