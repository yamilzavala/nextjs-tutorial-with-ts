'use client';
import { useFormStatus } from "react-dom";

const Submit = () => {
    const {pending} = useFormStatus();
    return (
        <button disabled={pending} className={btnStyle}>{pending ? 'submitting...' : 'submit'}</button>
    );
};

export default Submit;

const btnStyle =
  'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize';