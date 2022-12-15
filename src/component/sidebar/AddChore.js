import React from 'react';
import { useState } from 'react';

const AddChore = ({ setChoreShown, choreShown, setUsers, setChores }) => {
  const [newRoom, setNewRoom] = useState(null);
  const [newChore, setNewChore] = useState(null);

  const addChore = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/chore', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        chore: newChore,
        room: newRoom,
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
            setChoreShown((choreShown) => !choreShown);
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
    <div className="AddChore">
      {choreShown && (
        // <form className="add-chore">
        <div>
          <input
            className="input input-bordered input-primary"
            type="text"
            name="newChore"
            placeholder="add new chore"
            onChange={(e) => setNewChore(e.target.value)}
          />
          <input
            className="input input-bordered input-primary"
            type="text"
            name="newRoom"
            placeholder="add new room"
            onChange={(e) => setNewRoom(e.target.value)}
          />
          <button
            className="btn btn-secondary btn-sm"
            type="submit"
            onClick={addChore}
          >
            Add Chore
          </button>
          {/* </form> */}
        </div>
      )}
    </div>
  );
};

export default AddChore;
