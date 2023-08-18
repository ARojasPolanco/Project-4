import { useEffect, useState } from 'react'
import './App.css'
import UserList from './components/UserList'
import axios from 'axios';
import UserForm from './components/UserForm';

const BASE_URL = "https://users-crud.academlo.tech/"

function App() {
  const [isShowModal, setIsShowModal] = useState(false)
  const [users, setUsers] = useState([])

  const handleShowModal = () => {
    setIsShowModal(!isShowModal)
  }

  const getAllUsers = () => {
    axios
      .get(BASE_URL + 'users/')
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err))
  }

  const createUser = (newUser) => {
    axios
      .post(BASE_URL + 'users/', newUser)
      .then(() => getAllUsers())
      .catch((err) => console.log(err))
  }

  const deleteUser = (deleteUser, idUser) => {
    axios
      .delete(BASE_URL + `users/${idUser}`, deleteUser)
      .then(() => getAllUsers())
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <main>
      <h1 className=''>Usuarios</h1>
      <button onClick={handleShowModal}>Crear nuevo usuario</button>

      < UserList users={users} deleteUser={deleteUser} setIsShowModal={setIsShowModal} />

      {isShowModal && < UserForm createUser={createUser} />}
    </main>
  )
}

export default App
