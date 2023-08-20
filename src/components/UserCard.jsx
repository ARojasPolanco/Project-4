const UserCard = ({ user, deleteUser, handleUpdateUser }) => {

    const handleDelete = () => {
        deleteUser(user, user.id)
    }

    return (
        <section className="grid w-[200px] gap-4 p-4 shadow-lg">
            <article className="grid gap-1">
                <h2 className="capitalize text-very-dark-blue text-xl line-clamp-1">{user.first_name} {user.last_name}</h2>
                <p className="text-text-light-200/50">Email</p>
                <p>{user.email}</p>
                <p className="text-text-light-200/50">Birthday</p>
                <p>{user.birthday}</p>
            </article>
            <div className="flex justify-end gap-2">
                <section className="bg-salmon text-light-100 h-6 w-6 text-center">
                    <button onClick={handleDelete}><i className='bx bx-trash'></i></button>
                </section>
                <section className="border border-text-light-100/60 h-6 w-6 text-center text-text-light-200">
                    <button onClick={() => handleUpdateUser(user)}><i className='bx bxs-edit-alt'></i></button>
                </section>
            </div>
        </section>
    )
}

export default UserCard