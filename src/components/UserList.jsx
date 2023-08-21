import UserCard from "./UserCard"

const UserList = ({ users, deleteUser, handleUpdateUser, setIsDeleteUser, handleShowModal, setValue, value, setValueUpdate, valueUpdate, setIsUpdateUser, isUpdateUser, setIsConfirmUpdateUser }) => {
    return (
        <section className="grid grid-rows-[auto,auto] gap-8 items-center justify-center p-4 min-[550px]:grid-cols-[auto,auto]">
            {
                users.map((user) => <UserCard key={user.id} user={user} deleteUser={deleteUser} handleUpdateUser={handleUpdateUser} setIsDeleteUser={setIsDeleteUser} handleShowModal={handleShowModal} setValue={setValue} value={value} setValueUpdate={setValueUpdate} valueUpdate={valueUpdate} setIsUpdateUser={setIsUpdateUser} isUpdateUser={isUpdateUser} setIsConfirmUpdateUser={setIsConfirmUpdateUser} />)
            }
        </section>
    )
}

export default UserList