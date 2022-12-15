import React from 'react';

const DeleteName = ({ selectedUserId }) => {
  const deleteName = (e) => {
    console.log('USERID:', selectedUserId);
    e.preventDefault();
    fetch('http://localhost:3000/user', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        id: selectedUserId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location.pathname = '/';
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="deleteName">
      <button className="btn btn-sm glass" onClick={deleteName}>
        Delete current name
      </button>
    </div>
  );
};

export default DeleteName;
