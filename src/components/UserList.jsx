import UserCard from "./UserCard";

const UserList = ({
    users,
    deleteUser,
    setIsModalDeleteUser,
    handleUpdateUser
}) => {
    return (
        <section className="grid grid-rows-[auto,auto] gap-8 items-center justify-center p-4 min-[550px]:grid-cols-[auto,auto]">
            {users.map((user) => (
                <UserCard
                    key={user.id}
                    user={user}
                    deleteUser={deleteUser}
                    setIsModalDeleteUser={setIsModalDeleteUser}
                    handleUpdateUser={handleUpdateUser}
                />
            ))}
        </section>
    );
};

export default UserList;
