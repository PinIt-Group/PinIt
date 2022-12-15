import React from 'react';
import { useState } from 'react';

const DeleteChore = ({ selectedChoreID }) => {

  const deleteChore = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/chore', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        choreID: selectedChoreID,
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

  return <div className="deleteChore">
    <button className="btn btn-sm glass" onClick={deleteChore}>
            Delete current chore
    </button>
  </div>;
};

export default DeleteChore;
