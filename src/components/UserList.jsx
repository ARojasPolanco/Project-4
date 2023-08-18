import UserCard from "./UserCard"

const UserList = ({ users, deleteUser, setIsShowModal }) => {
    return (
        <section>
            {
                users.map((user) => <UserCard key={user.id} user={user} deleteUser={deleteUser} setIsShowModal={setIsShowModal} />)
            }
        </section>
    )
}

export default UserList