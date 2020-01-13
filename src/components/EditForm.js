import React, { useState } from "react";

function EditForm({ user, editUser, cancelEditing }) {
  const [form, updateForm] = useState({
    name: user.name,
    username: user.username
  });

  function onChange(e) {
    updateForm({ ...form, [e.target.name]: e.target.value });
  }

  function onClick() {
    const { name, username } = form;
    if (name && username) {
      const userForm = { name, username };
      editUser(userForm, user.id);
    } else {
      alert("Please fill in all fields");
    }
  }

  const { name, username } = form;
  return (
    <>
      <div>
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
          <button onClick={onClick}>Update User</button> {"   "}
          <button onClick={cancelEditing}>Cancel</button>
        </div>
      </div>
    </>
  );
}

export default EditForm;
