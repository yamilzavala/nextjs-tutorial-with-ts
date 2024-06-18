import { deleteUser, removeUser } from "@/utils/actions";

const Delete = ({id}:{id:string}) => {
    const removeUserFn = removeUser.bind(null, id)
    return (
        <form action={removeUserFn}>
            <input type="hidden" value={id} name='id' />
            <button className={deleteStyle} type="submit">delete</button>
        </form>
    );
};

export default Delete;

const deleteStyle = 'bg-red-500 text-white text-xs rounded p-2'