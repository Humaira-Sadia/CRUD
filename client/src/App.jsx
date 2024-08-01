import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import axios from "axios";

const App = () => {
  const [users, SetUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://crud-emeg.onrender.com/")
      .then((res) => SetUsers(res.data))
      .catch((err) => console.log(err));
  });

  const handleDelete = (id) => {
    axios.delete("https://crud-emeg.onrender.com/"+id)
    .then(res => {
      console.log(res)
      window.location.reload()
    })
    .catch(err => console.log(err))
  }

  return (
    <>
      <div className="container flex flex-col justify-center items-center h-screen">
        <div className="admin-table w-1/2 flex flex-col justify-center items-center">
          <h1 className="text-7xl font-semibold text-slate-400 font-serif">
            Admin Table
          </h1>
          <div className="admin-subtitle mt-10 w-full flex flex-row justify-between p-3 items-center">
            <h1 className="font-semibold tracking-wide text-2xl text-slate-500 font-serif">
              List of Users
            </h1>
            <Link
              to="/create"
              className="bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 text-white font-bold p-2 rounded-lg"
            >
              Add More
            </Link>
          </div>
        </div>
        <ul className="mt-5 w-1/2 flex flex-col p-3 h-1/3 overflow-y-scroll font-semibold text-slate-600">
          {users.map((user, index) => (
            <div className="flex items-center" key={index}>
              <li className="p-2 mr-5">{user.serial}</li>
              <div className="flex justify-between w-full">
                <li>{user.name}</li>
                <li>{user.email}</li>
                <hr />
              </div>
              <Link to="/edit">
                <MdEdit className="text-2xl mr-2px text-green-600" />
              </Link>
              <MdDeleteForever
                onClick={() => handleDelete(user._id)}
                className="text-2xl text-red-600"
              />
            </div>
          ))}
        </ul>
        <button className="bg-red-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 text-white font-bold p-2 mt-5 rounded-lg">
          Delete Users
        </button>
      </div>
    </>
  );
};

export default App;
