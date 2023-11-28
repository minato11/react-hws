import React, {useState} from 'react';

export default function Form() {
    let [formState, setFormState] = useState({username: '', age: 0});
    const submit = (e) => {
        e.preventDefault()
        let username = e.target.username.value;
        let age = e.target.age.value;
        console.log(username, age);
    }

    const onChangeInputState = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
    }
    return (
        <div>
            <form onSubmit={submit}>
                <input
                    type="text"
                    name={'username'}
                    value={formState.username}
                    onChange={onChangeInputState}
                />
                <input
                    type="number"
                    name={'age'}
                    value={formState.age}
                    onChange={onChangeInputState}
                />
                <button>Send</button>
                <div>
                    {JSON.stringify(formState)}
                </div>
            </form>
        </div>
    );

}
