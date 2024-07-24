import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import "font-awesome/css/font-awesome.css";
import "react-toastify/dist/ReactToastify.css";

const Accueil = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getList();
  });

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
        <div>users</div>
        <div>todos</div>

        <div>posts</div>
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
                    <button type="button" 
                    class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"><i className="fa fa-eye"></i></button>
                    <button type="button" 
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><i className="fa fa-edit"></i></button>

                    <button type="button" 
                    class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"><i className="fa fa-trash"></i></button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Accueil;
