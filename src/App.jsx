import { useEffect, useState } from 'react'
import './App.css'
import UserList from './components/UserList'
import axios from 'axios';
import UserForm from './components/UserForm';
import { EMPTY_FORM_VALUES } from './shared/constants';

const BASE_URL = "https://users-crud.academlo.tech/"

function App() {
  const [isShowModal, setIsShowModal] = useState(false)
  const [users, setUsers] = useState([])
  const [isUpdateModal, setIsUpdateModal] = useState(false)
  const [isUpdateUser, setIsUpdateUser] = useState(null)

  const handleShowModal = (setValue, value) => {
    setValue(!value)
  }

  const handleUpdateUser = (user) => {
    setIsUpdateModal(true)
    setIsUpdateUser(user)
  }

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
      })
      .catch((err) => console.log(err))
  }

  const deleteUser = (deleteUser, idUser) => {
    axios
      .delete(BASE_URL + `users/${idUser}`, deleteUser)
      .then(() => getAllUsers())
      .catch((err) => console.log(err))
  }

  const updateUser = (userData, reset) => {
    axios
      .patch(BASE_URL + `users/${isUpdateUser.id}`, userData)
      .then(() => {
        getAllUsers()
        reset(EMPTY_FORM_VALUES)
        setIsUpdateUser(null)
        setIsUpdateModal(false)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <main className={`bg-light-200 min-h-screen w-full font-Nunito relative`}>
      <section className='flex justify-between py-8 px-2 items-center max-w-[500px] mx-auto'>
        <h1 className='text-2xl text-dark-blue font-bold'>Users</h1>
        <section className='flex justify-center items-center bg-light-purple px-1 py-1 text-light-100 gap-2'>
          <i class='bx bx-plus'></i>
          <button className='px-2' onClick={() => handleShowModal(setIsShowModal, isShowModal)}>Create new user</button>
        </section>
      </section>


      < UserList users={users} deleteUser={deleteUser} handleUpdateUser={handleUpdateUser} />

      <section className={`grid fixed top-0 bg-dark-200/90 min-h-screen place-items-center w-full backdrop-blur-sm text-light-100 p-4 ${isShowModal ? 'left-0' : '-left-96'} transition-all duration-500`}>
        <UserForm createUser={createUser} handleShowModal={handleShowModal} value={isShowModal} setValue={setIsShowModal} />
      </section>

      <section className={`grid fixed top-0 bg-dark-200/90 min-h-screen place-items-center w-full backdrop-blur-sm text-light-100 p-4 ${isUpdateModal ? 'right-0' : '-right-96'} transition-all duration-500`}>
        <UserForm createUser={createUser} handleShowModal={handleShowModal} value={isUpdateModal} setValue={setIsUpdateModal} isUpdateUser={isUpdateUser} updateUser={updateUser} />
      </section>

    </main>
  )
}

export default App
