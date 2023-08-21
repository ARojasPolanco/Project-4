const UserCard = ({ user, handleShowModal, setValue, value, setIsDeleteUser, handleUpdateUser, setIsConfirmUpdateUser }) => {

    return (
        <section className="grid w-[300px] gap-4 p-4 shadow-lg min-[550px]:w-[250px]">
            <article className="grid gap-1">
                <h2 className="capitalize text-very-dark-blue text-xl line-clamp-1">{user.first_name} {user.last_name}</h2>
                <p className="text-text-light-200/50">Email</p>
                <p className="line-clamp-1">{user.email}</p>
                <p className="text-text-light-200/50">Birthday</p>
                <p>{user.birthday}</p>
            </article>
            <div className="flex justify-end gap-2">
                <section className="bg-salmon text-light-100 h-6 w-6 text-center">
                    <button onClick={() => {
                        handleShowModal(setValue, value)
                        setIsDeleteUser(user)
                    }}>
                        <i className='bx bx-trash'></i>
                    </button>
                </section>
                <section className="border border-text-light-100/60 h-6 w-6 text-center text-text-light-200">
                    <button onClick={setIsConfirmUpdateUser(user)}><i className='bx bxs-edit-alt'></i></button>
                </section>
            </div>
        </section>
    )
}

export default UserCard