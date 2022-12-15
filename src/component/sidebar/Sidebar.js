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
import DeleteRoom from './DeleteRoom';

/**
 * [] Add button to delete room
 * [] Add button to add room
 * [] Make things work
 */

const Sidebar = ({ users, chores, setUsers, setChores, badWeather }) => {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState([]);
  const [selectedChoreId, setSelectedChoreId] = useState([]);
  // state to show and hide add name form
  const [nameShown, setNameShown] = useState(false);
  // state to show and hide add chore form
  const [choreShown, setChoreShown] = useState(false);

  // const [trigger, setTrigger] = useState(0);

  // useEffect(() => {
  //   // console.log('Fetching chores');
  //   fetch('/choresAndUsers')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // console.log('data', data);
  //       setUsers(data.users);
  //       setChores(data.chores);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // }, []);

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
          <DeleteName
            selectedUserId={selectedUserId}
            setUsers={setUsers}
            setChores={setChores}
          />
          <AddName
            nameShown={nameShown}
            setUsers={setUsers}
            setChores={setChores}
            setNameShown={setNameShown}
          />
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
          <DeleteRoom setUsers={setUsers} setChores={setChores} />
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
          <DeleteChore
            selectedChoreId={selectedChoreId}
            setUsers={setUsers}
            setChores={setChores}
          />
          <AddChore
            setChoreShown={setChoreShown}
            choreShown={choreShown}
            setUsers={setUsers}
            setChores={setChores}
          />
        </div>
        <AssignChore
          setChoreShown={setChoreShown}
          selectedChoreId={selectedChoreId}
          selectedUserId={selectedUserId}
          setUsers={setUsers}
          setChores={setChores}
        />
      </form>
    </div>
  );
};

export default Sidebar;
