import {useForm} from "react-hook-form";

export default function Form2() {
    let hookForm= useForm();
    let {register,handleSubmit,watch} = hookForm;
    let watchAllFields = watch();
    console.log(watchAllFields)

    const onSubmitForm = (data)=>{
        console.log(data);
    }
    return(
        <>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <hr/>
                <input type="text" {...register('username')} defaultValue={'def'}/>
                <input type="text" {...register('age')} defaultValue={-999}/>
                <button>send</button>
            </form>
        </>
    )
}