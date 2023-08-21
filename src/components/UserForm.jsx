import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { emailError, paswwordError, userError } from "../services/createUsers";

const UserForm = ({
    createUser,
    isUpdateUser,
    setIsModalConfirmUpdateUser,
    setIsShowModalCreateUser,
    setIsShowModalUpdateUser,
    setConfirmUpdateUser,
    setIsUpdateUser,
    setIsCreateEmptyError
}) => {
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm();

    const submit = (data) => {
        if (isUpdateUser) {
            setIsModalConfirmUpdateUser(true);
            setConfirmUpdateUser({ data, reset });
        } else {
            createUser(data, reset);
        }
    };

    useEffect(() => {
        isUpdateUser && reset(isUpdateUser);
    }, [isUpdateUser]);

    return (
        <form
            className="grid gap-4 bg-dark-100 p-6 rounded-xl w-full relative max-w-[500px]"
            onSubmit={handleSubmit(submit)}
        >
            <button
                className="flex absolute bg-accent-100 text-dark-100 font-bold h-6 aspect-square rounded-full justify-center items-center right-2 top-2"
                onClick={() => {
                    setIsShowModalCreateUser(false);
                    setIsShowModalUpdateUser(false);
                    setIsUpdateUser(null)
                    setIsCreateEmptyError(false)
                }}
            >
                X
            </button>
            <h2 className="text-center text-2xl font-bold">
                {isUpdateUser ? "Edit user" : "Create new user"}
            </h2>
            <div className="flex flex-col gap-2">
                <label htmlFor="">First Name</label>
                <input
                    className="text-light-100 p-2 bg-text-light-100"
                    type="text"
                    {...register("first_name", userError)}
                />
                {errors.first_name ? (
                    <p className="text-accent-100">{errors.first_name.message}</p>
                ) : (
                    <p></p>
                )}
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="">Last Name</label>
                <input
                    className="text-light-100 p-2 bg-text-light-100"
                    type="text"
                    {...register("last_name", userError)}
                />
                {errors.last_name ? (
                    <p className="text-accent-100">{errors.last_name.message}</p>
                ) : (
                    <p></p>
                )}
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="">Email</label>
                <input
                    className="text-light-100 p-2 bg-text-light-100"
                    type="text"
                    {...register("email", emailError)}
                />
                {errors.email ? (
                    <p className="text-accent-100">{errors.email.message}</p>
                ) : (
                    <p></p>
                )}
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="">Password</label>
                <input
                    className="text-light-100 p-2 bg-text-light-100"
                    type={isUpdateUser ? "text" : "password"}
                    {...register("password", paswwordError)}
                />
                {errors.password ? (
                    <p className="text-accent-100">{errors.password.message}</p>
                ) : (
                    <p></p>
                )}
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="">Birthday</label>
                <input
                    className="text-light-100 p-2 bg-text-light-100"
                    type="date"
                    {...register("birthday")}
                />
            </div>
            <button className="bg-text-light-200 mt-6 rounded-lg py-2">
                {isUpdateUser ? "Save changes" : "Create user"}
            </button>
        </form>
    );
};

export default UserForm;
