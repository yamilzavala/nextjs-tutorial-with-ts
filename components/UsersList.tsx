import { fetchUsers } from "@/utils/actions";

const UsersList = async () => {
    const users = await fetchUsers();
    return (
        <div className="mt-4">
            { 
              users.length ? 
              (users.map(user => (
                <h4 className="text-lg capitalize" key={user.id}>{user.firstName}</h4>
              ))) :
              (<div><p>No users found...</p></div>)
            }
        </div>
    );
};

export default UsersList;