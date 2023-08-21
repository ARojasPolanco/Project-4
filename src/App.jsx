import { useEffect, useState } from "react";
import "./App.css";
import UserList from "./components/UserList";
import axios from "axios";
import UserForm from "./components/UserForm";
import { EMPTY_FORM_VALUES } from "./shared/constants";
import ConfirmModalUser from "./components/ConfirmModalUser";

const BASE_URL = "https://users-crud.academlo.tech/";

function App() {
  const [isShowModalCreateUser, setIsShowModalCreateUser] = useState(false);
  const [users, setUsers] = useState([]);
  const [isShowModalUpdateUser, setIsShowModalUpdateUser] = useState(false);
  const [isUpdateUser, setIsUpdateUser] = useState(null);
  const [isModalConfirmCreateUser, setIsModalConfirmCreateUser] =
    useState(false);
  const [isCreateEmptyError, setIsCreateEmptyError] = useState(false);
  const [isModalDeleteUser, setIsModalDeleteUser] = useState(null);
  const [isModalConfirmUpdateUser, setIsModalConfirmUpdateUser] =
    useState(false);
  const [confirmUpdateUser, setConfirmUpdateUser] = useState({});


  const handleUpdateUser = (user) => {
    setIsShowModalUpdateUser(true);
    setIsUpdateUser(user);
  };

  const handleDelete = () => {
    deleteUser(isModalDeleteUser, isModalDeleteUser.id);
    setIsModalDeleteUser(null);
  };

  const handleConfirmUpdateUser = () => {
    const { data, reset } = confirmUpdateUser;
    updateUser(data, reset);
    setIsModalConfirmUpdateUser(false);
  };

  const getAllUsers = () => {
    axios
      .get(BASE_URL + "users/")
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err));
  };

  const createUser = (newUser, reset) => {
    axios
      .post(BASE_URL + "users/", newUser)
      .then(() => {
        getAllUsers();
        reset(EMPTY_FORM_VALUES);
        setIsShowModalCreateUser(false);
        setIsModalConfirmCreateUser(true);
      })
      .catch((err) => {
        console.log(err);
        setIsCreateEmptyError(true);
      });
  };

  const deleteUser = (deleteUser, idUser) => {
    axios
      .delete(BASE_URL + `users/${idUser}`, deleteUser)
      .then(() => {
        isModalDeleteUser && getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  const updateUser = (userData, reset) => {
    axios
      .patch(BASE_URL + `users/${isUpdateUser.id}/`, userData)
      .then(() => {
        getAllUsers();
        reset(EMPTY_FORM_VALUES);
        setIsShowModalUpdateUser(false);
        setIsUpdateUser(null);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <main className="bg-light-200 min-h-screen w-full font-Nunito relative">
      <section className="flex justify-between py-8 px-2 items-center max-w-[500px] mx-auto">
        <h1 className="text-2xl text-dark-blue font-bold">Users</h1>
        <section className="flex justify-center items-center bg-light-purple px-1 py-1 text-light-100 gap-[2px]">
          <i className="bx bx-plus"></i>
          <button
            className="px-2"
            onClick={() => setIsShowModalCreateUser(true)}
          >
            Create new user
          </button>
        </section>
      </section>

      <UserList
        users={users}
        deleteUser={deleteUser}
        setIsModalDeleteUser={setIsModalDeleteUser}
        handleUpdateUser={handleUpdateUser}
      />

      <section
        className={`grid fixed top-0 bg-dark-200/90 min-h-screen place-items-center w-full backdrop-blur-sm text-light-100 p-4 ${isShowModalCreateUser ? "left-0" : "-left-full"
          } transition-all duration-500 min-[880px]:w-[500px] min-[880px]:rounded-r-3xl`}
      >
        <UserForm
          createUser={createUser}
          setIsShowModalCreateUser={setIsShowModalCreateUser}
          setIsShowModalUpdateUser={setIsShowModalUpdateUser}
          setIsUpdateUser={setIsUpdateUser}
          setIsCreateEmptyError={setIsCreateEmptyError}
        />
      </section>

      <section
        className={`grid fixed top-0 bg-dark-200/90 min-h-screen place-items-center w-full backdrop-blur-sm text-light-100 p-4 ${isShowModalUpdateUser ? "right-0" : "-right-full"
          } transition-all duration-500 min-[880px]:w-[500px] min-[880px]:rounded-l-3xl`}
      >
        <UserForm
          isUpdateUser={isUpdateUser}
          handleConfirmUpdateUser={handleConfirmUpdateUser}
          setIsShowModalUpdateUser={setIsShowModalUpdateUser}
          setIsShowModalCreateUser={setIsShowModalCreateUser}
          setIsModalConfirmUpdateUser={setIsModalConfirmUpdateUser}
          confirmUpdateUser={confirmUpdateUser}
          setConfirmUpdateUser={setConfirmUpdateUser}
          setIsUpdateUser={setIsUpdateUser}
          setIsCreateEmptyError={setIsCreateEmptyError}
        />
      </section>

      {isModalConfirmCreateUser && (
        <section className="fixed top-0 left-0 min-h-screen w-full backdrop-blur-sm flex justify-center items-center p-4">
          <ConfirmModalUser
            image={"/images/check.png"}
            title={"Succes"}
            parragraph={"User created successfuly"}
            footer={"Thanks"}
            setIsModalConfirmCreateUser={setIsModalConfirmCreateUser}
            setIsModalConfirmUpdateUser={setIsModalConfirmUpdateUser}
            setIsModalDeleteUser={setIsModalDeleteUser}
            setIsCreateEmptyError={setIsCreateEmptyError}
          />
        </section>
      )}

      {isCreateEmptyError && (
        <section className="fixed top-0 left-0 min-h-screen w-full backdrop-blur-sm flex justify-center items-center p-4">
          <ConfirmModalUser
            image={"/images/error.png"}
            title={"Error"}
            parragraph={"Please complete all fields"}
            footer={"Thanks"}
            setIsModalConfirmCreateUser={setIsModalConfirmCreateUser}
            setIsModalConfirmUpdateUser={setIsModalConfirmUpdateUser}
            setIsModalDeleteUser={setIsModalDeleteUser}
            setIsCreateEmptyError={setIsCreateEmptyError}
          />
        </section>
      )}

      {isModalDeleteUser && (
        <section className="fixed top-0 left-0 min-h-screen w-full backdrop-blur-sm flex justify-center items-center p-4">
          <ConfirmModalUser
            image={"/images/warning.png"}
            title={"Warning"}
            parragraph={"Are you sure do you want to delete this user?"}
            setIsModalDeleteUser={setIsModalDeleteUser}
            isModalDeleteUser={isModalDeleteUser}
            handleDelete={handleDelete}
            setIsModalConfirmCreateUser={setIsModalConfirmCreateUser}
            setIsModalConfirmUpdateUser={setIsModalConfirmUpdateUser}
            setIsCreateEmptyError={setIsCreateEmptyError}
          />
        </section>
      )}

      {isModalConfirmUpdateUser && (
        <section className="fixed top-0 left-0 min-h-screen w-full backdrop-blur-sm flex justify-center items-center p-4">
          <ConfirmModalUser
            image={"/images/warning.png"}
            title={"Warning"}
            parragraph={"Are you sure do you want to update this user?"}
            setIsModalConfirmUpdateUser={setIsModalConfirmUpdateUser}
            isModalConfirmUpdateUser={isModalConfirmUpdateUser}
            setIsModalConfirmCreateUser={setIsModalConfirmCreateUser}
            setIsModalDeleteUser={setIsModalDeleteUser}
            setConfirmUpdateUser={setConfirmUpdateUser}
            handleConfirmUpdateUser={handleConfirmUpdateUser}
            setIsCreateEmptyError={setIsCreateEmptyError}
          />
        </section>
      )}
    </main>
  );
}

export default App;
