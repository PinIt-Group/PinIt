import React, { useEffect, useState } from 'react';
import ListName from './ListName';
import ListRoom from './ListRoom';
import ListChore from './ListChore';
import WeatherIndicator from './WeatherIndicator';
import AddName from './AddName.js';
import AssignChore from './AssignChore';
import DeleteName from './DeleteName';
import AddChore from './AddChore';
import DeleteChore from './DeleteChore';

const Sidebar = ({ users, chores, setUsers, setChores, badWeather }) => {

  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState([]);
  const [selectedChoreId, setSelectedChoreId] = useState([]);
  // state to show and hide add name form
  const [nameShown, setNameShown] = useState(false);
  // state to show and hide add chore form
  const [choreShown, setChoreShown] = useState(false);
  // adding useEffect to here and a new state
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    // console.log('Fetching chores');
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
  }, [trigger]);

  // deletes selected chore from dropdown menu
  const deleteChore = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/chore', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        choreID: selectedChoreId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // show the addname form
  const handleNameForm = (e) => {
    e.preventDefault();
    setNameShown((current) => !current);
  };

  // show the addchore form
  const handleChoreForm = (e) => {
    e.preventDefault();
    setChoreShown((current) => !current);
  };

  return (
    <div className="bg-base-300 sidebar">
      <form className="choreForm">
        <label className="assignChoreLabel">Assign a Chore: </label>
        <div>
          <ListName
            users={users}
            selectedUserId={selectedUserId}
            setSelectedUserId={setSelectedUserId}
          />
          <button className="btn btn-sm" onClick={handleNameForm}>
            +
          </button>
          <DeleteName selectedUserId={selectedUserId} />
          <AddName nameShown={nameShown} />
        </div>
        <div className="weatherIndicator">
          <ListRoom
            chores={chores}
            selectedRoom={selectedRoom}
            setSelectedRoom={setSelectedRoom}
          />
          <WeatherIndicator
            badWeather={badWeather}
            selectedRoom={selectedRoom}
          />
        </div>
        <div>
          <ListChore
            chores={chores}
            selectedRoom={selectedRoom}
            selectedChoreId={selectedChoreId}
            setSelectedChoreId={setSelectedChoreId}
          />
          <button className="btn btn-sm" onClick={handleChoreForm}>
            +
          </button>
          <button className="btn btn-sm glass" onClick={deleteChore}>
            Delete current chore
          </button>
          <AddChore choreShown={choreShown} />
        </div>
        <AssignChore
          selectedChoreId={selectedChoreId}
          selectedUserId={selectedUserId}
        />
      </form>
    </div>
  );
};

export default Sidebar;
