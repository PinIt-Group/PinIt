import React from 'react';
import { useState } from 'react';

const AddName = ({ nameShown }) => {
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
      })
      .catch((err) => {
        console.log('something happened here');
        console.log(err);
      });
  };

  return (
    <div className="">
      {nameShown && (
        <form className="add-name">
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
        </form>
      )}
    </div>
  );
};

export default AddName;
