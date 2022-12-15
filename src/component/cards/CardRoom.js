import React from 'react';

export default function CardRoom({ chores, setUsers, setChores }) {
  const handleClick = async (e) => {
    //fetch request to update chore
    e.preventDefault();
    const response = await fetch('/chore', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        choreID: e.target.value,
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
        <input type="checkbox" onClick={handleClick} value={chores.id}></input>
      </div>
      <span>{chores.chore}</span>
    </div>
  );
}
