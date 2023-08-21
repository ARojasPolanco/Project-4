const ConfirmModalUser = ({
    image,
    title,
    parragraph,
    footer,
    setIsModalConfirmCreateUser,
    isModalDeleteUser,
    setIsModalDeleteUser,
    handleDelete,
    isModalConfirmUpdateUser,
    setIsModalConfirmUpdateUser,
    handleConfirmUpdateUser,
    setIsCreateEmptyError
}) => {
    return (
        <section className="w-full max-w-[550px] bg-light-200 shadow-lg shadow-text-light-200 relative flex flex-col justify-center items-center gap-6 p-4">
            <button
                onClick={() => {
                    setIsModalConfirmCreateUser(false);
                    setIsModalDeleteUser(null);
                    setIsModalConfirmUpdateUser(false)
                    setIsCreateEmptyError(false)
                }}
                className="bg-accent-200 text-light-100 h-6 aspect-square rounded-full font-bold absolute right-4 top-4"
            >
                X
            </button>
            <div className="w-1/2">
                <img src={image} alt="" />
            </div>
            <article className="text-very-dark-blue text-lg text-center font-bold">
                <h2>{title}</h2>
                <p>{parragraph}</p>
            </article>
            <footer className="text-very-dark-blue text-lg text-center font-bold">
                {footer}
            </footer>

            <section className="flex gap-4">
                {isModalDeleteUser && (
                    <button
                        onClick={handleDelete}
                        className="bg-text-light-100 p-1 px-3 rounded-xl text-light-100"
                    >
                        Confirm
                    </button>
                )}
                {isModalDeleteUser && (
                    <button
                        onClick={() => setIsModalDeleteUser(null)}
                        className="bg-text-light-100 p-1 px-5 rounded-xl text-light-100"
                    >
                        Cancel
                    </button>
                )}
                {isModalConfirmUpdateUser && (
                    <button
                        onClick={handleConfirmUpdateUser}
                        className="bg-text-light-100 p-1 px-3 rounded-xl text-light-100"
                    >
                        Confirm
                    </button>
                )}
                {isModalConfirmUpdateUser && (
                    <button
                        onClick={() => setIsModalConfirmUpdateUser(false)}
                        className="bg-text-light-100 p-1 px-5 rounded-xl text-light-100"
                    >
                        Cancel
                    </button>
                )}
            </section>
        </section>
    );
};

export default ConfirmModalUser;
