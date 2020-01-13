import React, { useState } from "react";
import Form from "./components/Form";
import UserList from "./components/UserList";
import EditForm from "./components/EditForm";

function App() {
  const usersAPI = [
    {
      name: "Messi",
      username: "GOAT"
    },
    {
      name: "Ronaldo",
      username: "GOAL Machine"
    },
    {
      name: "Imran",
      username: "GOAT Junior"
    }
  ];

  const alertMessage = message => {
    setAlert(message);
    setTimeout(() => setAlert(null), 1200);
  };

  const [users, updateUsers] = useState(usersAPI);

  const [editPage, setEditPage] = useState(false);

  const [editedUser, setEditedUser] = useState({
    id: null,
    name: "",
    username: ""
  });

  const [alert, setAlert] = useState(null);

  const addUser = newUser => {
    updateUsers([...users, newUser]);
    alertMessage("User Added");
  };

  const deleteUser = id => {
    const newList = users.filter((user, index) => index !== id);
    const user = users[id];
    updateUsers(newList);
    alertMessage(`${user.name} Deleted`);
  };

  const editUrl = id => {
    const user = users[id];
    setEditedUser({ id, ...user });
    setEditPage(true);
  };

  const editUser = (user, id) => {
    const newUsers = users;
    newUsers[id] = user;
    updateUsers(newUsers);
    setEditPage(false);
    alertMessage(`${user.name} Updated`);
  };

  const cancelEditing = () => {
    setEditPage(false);
  };

  return (
    <>
      {editPage ? (
        <EditForm
          editUser={editUser}
          user={editedUser}
          cancelEditing={cancelEditing}
        />
      ) : (
        <Form addUser={addUser} />
      )}

      <hr />
      {alert && <h4>{alert}</h4>}
      <UserList
        users={users}
        deleteUser={deleteUser}
        editPageUrl={editUrl}
        isEditPage={editPage}
      />
    </>
  );
}

export default App;
