import React from "react";

function UserList({ users, deleteUser, editPageUrl, isEditPage }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Username</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              {!isEditPage ? (
                <>
                  <td>
                    <button onClick={() => deleteUser(index)}>Delete</button>
                  </td>
                  <td>
                    <button onClick={() => editPageUrl(index)}>Edit</button>
                  </td>
                </>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
