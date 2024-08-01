import React from "react";

const Edit = () => {

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="w-1/3 border rounded-lg p-10 flex flex-col items-center justify-center">
        <h3>Update User</h3>
        <form className="p-10" action="" >
          <div className="p-4">
            <label className="mr-4" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
            />
          </div>
          <div className="p-4">
            <label className="mr-4" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
            />
          </div>
          <br />
          <button className="btn bg-green-500 ml-60">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
