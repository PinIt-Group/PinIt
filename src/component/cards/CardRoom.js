import React from 'react';

export default function CardRoom({ chores, setUsers, setChores }) {
  const handleClick = async (e) => {
    //fetch request to update chore
    e.preventDefault();
    console.log('THIS IS THE EVENT HANDLER CHORES ID: ', chores.id);
    const response = await fetch('/chore', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        choreID: chores.id,
        assign: false,
      }),
    });
    const data = await response.json();
    // window.location.pathname = '/';
    // console.log('Patched Data: ', data);
    await fetch('/choresAndUsers')
      .then((response) => response.json())
      .then((data) => {
        // console.log('data', data);
        setUsers(data.users);
        setChores(data.chores);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  // console.log('chores:', chores);
  return (
    <div className="card-room">
      <div className="checkbox">
        <input
          type="checkbox"
          onClick={(e) => handleClick(e)}
          value={chores.id}
        ></input>
      </div>
      <span>{chores.chore}</span>
    </div>
  );
}
