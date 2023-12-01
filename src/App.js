import React, {useEffect, useState} from 'react';
import Form from "./components/Form";
import Form2 from "./components/Form2";

function App(){

let [counter, setCounter] = useState(0);
useEffect(()=>{
    console.log('useeffect');
}, [counter])
    return (
        <>
            <button onClick={
                ()=>{
                    counter++;
                    setCounter(counter);
                }
            }>
                increment {counter}
            </button>
            {/*<Form/>*/}
            {/*<Form2/>*/}
        </>
    );
}

export default App;