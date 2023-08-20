import { useForm } from "react-hook-form"
import { emailError, paswwordError, userError } from "../services/createUsers"
import { EMPTY_FORM_VALUES } from "../shared/constants"
import { useEffect } from "react"


const UserForm = ({ createUser, handleShowModal, setValue, value, isUpdateUser, updateUser }) => {
    const { handleSubmit, register, reset, formState: { errors } } = useForm()

    const submit = (data) => {
        isUpdateUser ? updateUser(data, reset) : createUser(data, reset)
    }

    useEffect(() => {
        isUpdateUser && reset(isUpdateUser)
    }, [isUpdateUser])


    return (
        <form className="grid gap-4 bg-dark-100 p-6 rounded-xl w-full relative" onSubmit={handleSubmit(submit)}>
            <button className="flex absolute bg-accent-100 text-dark-100 font-bold h-6 aspect-square rounded-full justify-center items-center right-2 top-2" onClick={() => handleShowModal(setValue, value)}>X</button>
            <h2 className="text-center text-2xl font-bold">Create user</h2>
            <div className="flex flex-col gap-2">
                <label htmlFor="">First Name</label>
                <input className="text-dark-100 p-2" type="text" {...register('first_name', userError)} />
                {errors.first_name ? <p>{errors.first_name.message}</p> : <p></p>}
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="">Last Name</label>
                <input className="text-dark-100 p-2" type="text" {...register('last_name', userError)} />
                {errors.last_name ? <p>{errors.last_name.message}</p> : <p></p>}
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="">Email</label>
                <input className="text-dark-100 p-2" type="email" {...register('email', emailError)} />
                {errors.email ? <p>{errors.email.message}</p> : <p></p>}
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="">Password</label>
                <input className="text-dark-100 p-2" type={isUpdateUser ? 'text' : 'password'} {...register('password', paswwordError)} />
                {errors.password ? <p>{errors.password.message}</p> : <p></p>}
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="">Birthday</label>
                <input className="text-dark-100 p-2" type="date" {...register('birthday')} />
            </div>
            <button className="bg-text-light-200 mt-6 rounded-lg">Create User</button>
        </form>
    )
}

export default UserForm