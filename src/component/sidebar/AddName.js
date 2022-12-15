import React from 'react';
import { useState } from 'react';

const AddName = ({ setNameShown, nameShown, setUsers, setChores }) => {
  const [newName, setNewName] = useState(null);

  const addName = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: newName,
      }),
    })
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
            setNameShown((nameShown) => !nameShown);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      })
      .catch((err) => {
        console.log('something happened here');
        console.log(err);
      });
  };

  return (
    <div className="">
      {nameShown && (
        <div className="add-name">
          <input
            className="input input-bordered input-primary"
            type="text"
            name="newName"
            placeholder="new name"
            onChange={(e) => setNewName(e.target.value)}
          />
          <button
            className="btn btn-sm btn-secondary"
            type="submit"
            onClick={addName}
          >
            Add Name
          </button>
        </div>
      )}
    </div>
  );
};

export default AddName;
