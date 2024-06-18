import { fetchUsers } from "@/utils/actions";
import Delete from "./Delete";

const UsersList = async () => {
    const users = await fetchUsers();
    return (
        <div className="mt-4">
            { 
              users.length ? 
              (users.map(user => (
                <h4 className="text-lg capitalize flex justify-between items-center mb-2" key={user.id}>
                  {user.firstName} {user.lastName}
                  <Delete id={user.id} />
                </h4>
              ))) :
              (<div><p>No users found...</p></div>)
            }
        </div>
    );
};

export default UsersList;