const UserCard = ({ user, deleteUser, setIsShowModal }) => {

    const handleDelete = () => {
        deleteUser(user, user.id)
    }

    const handleUpdateUser = () => {
        setIsShowModal(true)
    }

    return (
        <article>
            <ul>
                <li>{user.first_name} {user.last_name}</li>
                <li>{user.email}</li>
                <li>{user.birthday}</li>
            </ul>
            <button onClick={handleDelete}><i className='bx bxs-trash'></i></button>
            <button onClick={handleUpdateUser}><i className='bx bxs-edit-alt'></i></button>
        </article>
    )
}

export default UserCard