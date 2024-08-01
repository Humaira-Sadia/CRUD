import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [serial, setSerial] = useState(1); // Initialize serial to 1

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/createUser", { name, email, serial })
      .then((res) => {
        console.log(res);
        // Increment serial for the next user
        setSerial((prevSerial) => prevSerial + 1);
      })
      .catch((err) => console.log(err));

    navigate("/");
  };

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="w-1/3 border rounded-lg p-10 flex flex-col items-center justify-center">
        <h3>Add New User</h3>
        <form onSubmit={handleSubmit} className="p-10" action="">
          <div className='flex'>
            <label className="mr-4">
              Name:
            </label>
            <input
              className="border p-2 rounded-xl w-full"
              type="text"
              name="name"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex mt-4">
            <label className="mr-4">
              Email:
            </label>
            <input
              className="border p-2 rounded-xl w-full"
              type="email"
              name="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <br />
          <button className="bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 text-white font-bold p-2 rounded-lg ml-60">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
