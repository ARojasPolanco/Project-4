const ConfirmModalUser = ({ image, title, parragraph, footer, handleShowModal, setValue, value, isDeleteUser, handleDelete, setIsConfirmUpdateUser, isConfirmUpdateUser, handleUpdateUser }) => {
    return (
        <section className="w-full bg-light-200 shadow-lg shadow-text-light-200 relative flex flex-col justify-center items-center gap-6 p-4">
            <button onClick={() => {
                handleShowModal(setValue, value)
                setIsConfirmUpdateUser(false)
            }}
                className="bg-accent-200 text-light-100 h-6 aspect-square rounded-full font-bold absolute right-4 top-4">X</button>
            <div className="w-1/2">
                <img src={image} alt="" />
            </div>
            <article className="text-very-dark-blue text-lg text-center font-bold">
                <h2>{title}</h2>
                <p>{parragraph}</p>
            </article>
            <footer className="text-very-dark-blue text-lg text-center font-bold">{footer}</footer>

            <section className="flex gap-4">
                {isDeleteUser &&
                    <button onClick={handleDelete} className="bg-text-light-100 p-1 px-3 rounded-xl text-light-100">Confirm</button>
                }
                {
                    isDeleteUser &&
                    <button onClick={() => handleShowModal(setValue, value)} className="bg-text-light-100 p-1 px-5 rounded-xl text-light-100">Cancel</button>
                }
                {isConfirmUpdateUser &&
                    <button onClick={handleUpdateUser} className="bg-text-light-100 p-1 px-3 rounded-xl text-light-100">Confirm</button>
                }
                {
                    isConfirmUpdateUser &&
                    <button onClick={() => handleShowModal(setValue, value)} className="bg-text-light-100 p-1 px-5 rounded-xl text-light-100">Cancel</button>
                }

            </section>
        </section>
    )
}

export default ConfirmModalUser