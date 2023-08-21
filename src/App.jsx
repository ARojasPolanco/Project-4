import { useEffect, useState } from 'react'
import './App.css'
import UserList from './components/UserList'
import axios from 'axios';
import UserForm from './components/UserForm';
import { EMPTY_FORM_VALUES } from './shared/constants';
import ConfirmModalUser from './components/ConfirmModalUser';

const BASE_URL = "https://users-crud.academlo.tech/"

function App() {
  const [isShowModal, setIsShowModal] = useState(false)
  const [users, setUsers] = useState([])
  const [isUpdateModal, setIsUpdateModal] = useState(false)
  const [isUpdateUser, setIsUpdateUser] = useState(null)
  const [isModalConfirm, setIsModalConfirm] = useState(false)
  const [isCreateEmptyError, setIsCreateEmptyError] = useState(false)
  const [isDeleteUser, setIsDeleteUser] = useState(null)
  const [isConfirmUpdateUser, setIsConfirmUpdateUser] = useState(null)

  const handleShowModal = (setValue, value) => {
    setValue(!value)
  }

  const handleUpdateUser = (user) => {
    setIsUpdateModal(true)
    setIsUpdateUser(user)
  }

  const handleDelete = () => {
    deleteUser(isDeleteUser, isDeleteUser.id)
    setIsDeleteUser(null)
  }

  console.log(isUpdateModal)

  const getAllUsers = () => {
    axios
      .get(BASE_URL + 'users/')
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err))
  }

  const createUser = (newUser, reset) => {
    axios
      .post(BASE_URL + 'users/', newUser)
      .then(() => {
        getAllUsers()
        reset(EMPTY_FORM_VALUES)
        setIsShowModal(false)
        setIsModalConfirm(true)
      })
      .catch((err) => {
        console.log(err)
        setIsCreateEmptyError(true)
      })
  }

  const deleteUser = (deleteUser, idUser) => {
    axios
      .delete(BASE_URL + `users/${idUser}`, deleteUser)
      .then(() => {
        isDeleteUser && getAllUsers()
        console.log(isDeleteUser)
      })
      .catch((err) => console.log(err))
  }

  const updateUser = (userData, reset) => {
    axios
      .patch(BASE_URL + `users/${isUpdateUser.id}/`, userData)
      .then(() => {
        getAllUsers()
        reset(EMPTY_FORM_VALUES)
        setIsUpdateModal(false)
        setIsUpdateUser(null)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <main className='bg-light-200 min-h-screen w-full font-Nunito relative'>
      <section className='flex justify-between py-8 px-2 items-center max-w-[500px] mx-auto'>
        <h1 className='text-2xl text-dark-blue font-bold'>Users</h1>
        <section className='flex justify-center items-center bg-light-purple px-1 py-1 text-light-100 gap-[2px]'>
          <i className='bx bx-plus'></i>
          <button className='px-2' onClick={() => handleShowModal(setIsShowModal, isShowModal)}>Create new user</button>
        </section>
      </section>


      < UserList users={users} deleteUser={deleteUser} handleUpdateUser={handleUpdateUser} setIsDeleteUser={setIsDeleteUser} handleShowModal={handleShowModal} setValue={setIsDeleteUser} value={isDeleteUser} setValueUpdate={setIsUpdateModal} valueUpdate={isUpdateModal} setIsConfirmUpdateUser={setIsConfirmUpdateUser} />

      <section className={`grid fixed top-0 bg-dark-200/90 min-h-screen place-items-center w-full backdrop-blur-sm text-light-100 p-4 ${isShowModal ? 'left-0' : '-left-full'} transition-all duration-500 min-[880px]:w-[500px] min-[880px]:rounded-r-3xl`}>
        <UserForm createUser={createUser} handleShowModal={handleShowModal} value={isShowModal} setValue={setIsShowModal} />
      </section>

      <section className={`grid fixed top-0 bg-dark-200/90 min-h-screen place-items-center w-full backdrop-blur-sm text-light-100 p-4 ${isConfirmUpdateUser ? 'right-0' : '-right-full'} transition-all duration-500 min-[880px]:w-[500px] min-[880px]:rounded-l-3xl`}>
        <UserForm createUser={createUser} handleShowModal={handleShowModal} value={isUpdateModal} setValue={setIsUpdateModal} isUpdateUser={isUpdateUser} updateUser={updateUser} setIsUpdateUser={setIsUpdateUser} setIsConfirmUpdateUser={setIsConfirmUpdateUser} isConfirmUpdateUser={isConfirmUpdateUser} />
      </section>

      {isModalConfirm && <section className='fixed top-0 left-0 min-h-screen w-full backdrop-blur-sm flex justify-center items-center p-4'>
        <ConfirmModalUser image={'/images/check.png'} title={'Succes'} parragraph={'User created successfuly'} footer={'Thanks'} handleShowModal={handleShowModal} setValue={setIsModalConfirm} value={isModalConfirm} />
      </section>}

      {isCreateEmptyError && <section className='fixed top-0 left-0 min-h-screen w-full backdrop-blur-sm flex justify-center items-center p-4'>
        <ConfirmModalUser image={'/images/error.png'} title={'Error'} parragraph={'Please complete all fields'} footer={'Thanks'} handleShowModal={handleShowModal} setValue={setIsCreateEmptyError} value={isCreateEmptyError} />
      </section>}


      {isDeleteUser && <section className='fixed top-0 left-0 min-h-screen w-full backdrop-blur-sm flex justify-center items-center p-4'>
        <ConfirmModalUser image={'/images/warning.png'} title={'Warning'} parragraph={"Are you sure do you want to delete this user?"} handleShowModal={handleShowModal} setValue={setIsDeleteUser} value={isDeleteUser} isDeleteUser={isDeleteUser} handleDelete={handleDelete} setIsDeleteUser={setIsDeleteUser} />
      </section>}

      {/* {isConfirmUpdateUser && <section className='fixed top-0 left-0 min-h-screen w-full backdrop-blur-sm flex justify-center items-center p-4'>
        <ConfirmModalUser image={'/images/warning.png'} title={'Warning'} parragraph={"Are you sure do you want to update this user?"} handleShowModal={handleShowModal} setValue={setIsConfirmUpdateUser} value={isConfirmUpdateUser} setIsConfirmUpdateUser={setIsConfirmUpdateUser} isConfirmUpdateUser={isConfirmUpdateUser} handleUpdateUser={handleUpdateUser} />
      </section>} */}

    </main>
  )
}

export default App
