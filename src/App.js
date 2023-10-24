// import React from 'react';
// import Users from "./components/Users";
//
// const App = () => {
//     return (
//         <div>
//          <Users/>
//         </div>
//     );
// };
//
// export default App;

import React, {useEffect, useState} from 'react';
import {userService} from "./services/user.service";
import User from "./components/User";

// const [name, setName] = useState('default')
// const [age, setAge] = useState(1)

// const nameHandler = (e) => {
//     setName(e.target.value)
//     console.log(e.target.value);
// }
// const ageHandler = (e) => {
//     setAge(e.target.value)
//     console.log(e.target.value);
// }



const App = ()  => {
    const [users, setUsers] = useState([])
    const [userId, setUserId] = useState(0)
    const [user, setUser] = useState(null)

    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value))
    }, []);
    const send = (e) =>{
        e.preventDefault()
        userService.getById(userId)
            .then(value => setUser(value))
    }
    const formHandler = (e) => {
        const id = e.target.value;
        setUserId(id)
    }
    return (
        <div>
            <form onSubmit={send}>
                <select name={"userId"} value={userId} onChange={formHandler}>
                    {users.map(value => <option key={value.id} value={value.id}> {value.id}) {value.name} </option>)}
                </select>
                <button>Send</button>
            </form>
            {user && <User user={user}/>}
        </div>
    );
};

export default App;