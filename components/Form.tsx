'use client';
import { createUser, fetchUsers } from "@/utils/actions";
import Submit from "./Submit";
import { useFormState } from "react-dom";

const Form = () => {
    const [message, formAction] = useFormState(createUser, null )
    return (
        <form action={formAction} className={formStyle}>
            {message && <p>{message}</p>}
            <h2 className={h2Style}>create user</h2>
            <input type="text" name="firstName" defaultValue='peter' className={inputStyle} required/>
            <input type="text" name="lastName" defaultValue='parker' className={inputStyle} required/>
            <Submit/>            
        </form>
    );
};

export default Form;

const formStyle = 'max-w-lg flex flex-col gap-y-4  shadow rounded p-8';
const inputStyle = 'border shadow rounded py-2 px-3 text-gray-700';
const h2Style = `text-2xl capitalize mb-4`