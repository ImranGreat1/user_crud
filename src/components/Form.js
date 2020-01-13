import React, { useState } from "react";

function Form({ addUser }) {
  const initialState = {
    name: "",
    username: ""
  };
  const [form, updateForm] = useState({
    name: "",
    username: ""
  });

  function onChange(e) {
    updateForm({ ...form, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    if (form.name && form.username) {
      addUser(form);
      updateForm(initialState);
    } else {
      alert("Please fill in all fields");
    }
  }

  const { name, username } = form;
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name</label> {"  "}
          <input type="text" onChange={onChange} name="name" value={name} />
        </div>

        <br />
        <div>
          <label htmlFor="username">Username</label>
          {"  "}
          <input
            type="text"
            onChange={onChange}
            name="username"
            value={username}
          />
        </div>
        <br />
        <div>
          <button type="submit">Add User</button>
        </div>
      </form>
    </>
  );
}

export default Form;
