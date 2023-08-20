import UserCard from "./UserCard"

const UserList = ({ users, deleteUser, handleUpdateUser }) => {
    return (
        <section className="grid grid-rows-[auto,auto] gap-12 items-center justify-center p-4 min-[500px]:grid-cols-[auto,auto]">
            {
                users.map((user) => <UserCard key={user.id} user={user} deleteUser={deleteUser} handleUpdateUser={handleUpdateUser} />)
            }
        </section>
    )
}

export default UserList