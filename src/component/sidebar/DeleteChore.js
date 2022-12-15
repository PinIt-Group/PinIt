import React from 'react';
import { useState } from 'react';

const DeleteChore = ({ selectedChoreID, setUsers, setChores }) => {
  const deleteChore = (e) => {
    e.preventDefault();
    fetch(
      `http://localhost:3000/chore/${e.target.parentNode.previousSibling.previousSibling.value}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // window.location.pathname = '/';
        fetch('/choresAndUsers')
          .then((response) => response.json())
          .then((data) => {
            // console.log('data', data);
            setUsers(data.users);
            setChores(data.chores);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="deleteChore">
      <button className="btn btn-sm glass" onClick={(e) => deleteChore(e)}>
        Delete current chore
      </button>
    </div>
  );
};

export default DeleteChore;
