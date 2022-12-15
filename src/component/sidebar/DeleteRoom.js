import React from 'react';
import { useState } from 'react';

const DeleteRoom = () => {

  const deleteRoom = (e) => {
    e.preventDefault();
    const value = e.target.parentNode.previousSibling.previousSibling.value;
    fetch(`http://localhost:3000/chore/${value}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
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
    <div className="DeleteRoom">
      <button className="btn btn-sm glass" onClick={(e) => deleteRoom(e)}>
        Delete current room
      </button>
    </div>
  );
};

export default DeleteRoom;
