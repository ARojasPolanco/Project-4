import { useForm } from "react-hook-form"

const UserForm = ({ createUser }) => {
    const { handleSubmit, register, reset } = useForm()

    const submit = (data) => {
        createUser(data)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label htmlFor="">FirstName</label>
            <input type="text" {...register('first_name')} />
            <label htmlFor="">LastName</label>
            <input type="text" {...register('last_name')} />
            <label htmlFor="">Email</label>
            <input type="email" {...register('email')} />
            <label htmlFor="">Password</label>
            <input type="password" {...register('password')} />
            <label htmlFor="">BirthDay</label>
            <input type="date" {...register('birthday')} />
            <button>Create User</button>
        </form>
    )
}

export default UserForm