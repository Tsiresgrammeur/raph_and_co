import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import "font-awesome/css/font-awesome.css";
import "react-toastify/dist/ReactToastify.css";

const Accueil = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState(0);
  const [posts, setPosts] = useState(0);
  useEffect(() => {
    getList();
    getPosts();
    getTodos();
  });

  const getPosts=() =>{
    axios
      .get("http://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        if (response.status === 200) {
          setPosts(response.data);
        } else {
          console.log("Vous n'êtes pas autorisé à accéder à cette page!");
        }
      })
      .catch(function (error) {
        console.error(error);
      })
      .finally(function () {
        setLoading(false); // Mark loading as complete, regardless of success or failure
      });

  }

  const getTodos=() =>{
    axios
      .get("http://jsonplaceholder.typicode.com/todos")
      .then(function (response) {
        if (response.status === 200) {
          setTodos(response.data);
        } else {
          console.log("Vous n'êtes pas autorisé à accéder à cette page!");
        }
      })
      .catch(function (error) {
        console.error(error);
      })
      .finally(function () {
        setLoading(false); // Mark loading as complete, regardless of success or failure
      });

  }

  const getList = () => {
    axios
      .get("http://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        if (response.status === 200) {
          setUsers(response.data);
        } else {
          console.log("Vous n'êtes pas autorisé à accéder à cette page!");
        }
      })
      .catch(function (error) {
        console.error(error);
      })
      .finally(function () {
        setLoading(false); // Mark loading as complete, regardless of success or failure
      });
  };
  return (
    <>
      <div class="grid grid-cols-3 gap-3">
        <div>
            <h3 className="text-3xl font-bold">Users</h3>
            {users.length} active users
        </div>
        <div>
            <h3 className="text-3xl font-bold">Todos</h3>
            {todos.length} Todos
        </div>
        <div>
            <h3 className="text-3xl font-bold">Posts</h3>
            {posts.length} Posts
        </div>

      </div>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th style={{ textAlign: "center", width: "50px" }}>N°</th>
              <th style={{ textAlign: "center", width: "300px" }}>Nom</th>
              <th style={{ textAlign: "center", width: "150px" }}>
                <i className="fa fa-cog"></i>
              </th>
            </tr>
          </thead>

          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  Il n'y a pas de données sur les enseignants pour le moment...
                </td>
              </tr>
            ) : (
              users.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td style={{ textAlign: "center" }}>{user.name}</td>
                  <td>
                    <button
                      type="button"
                      class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
                    >
                      <i className="fa fa-eye"></i>
                    </button>
                    <button
                      type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      <i className="fa fa-edit"></i>
                    </button>

                    <button
                      type="button"
                      class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
        <form>
          <div className="flex">
            <div className="flex justify-between">
              <input
                type="text"
                id="first_name"
                class="bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white-500 dark:focus:border-white-500 "
                placeholder="Title"
                required
              />
            </div>
            <button
              type="button"
              class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 ml-4 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
            >
              Submit
            </button>
          </div>
        </form>
</div>
        <div>
            <button
                      type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        Comments
                    </button>
        </div>
      </div>
    </>
  );
};

export default Accueil;
