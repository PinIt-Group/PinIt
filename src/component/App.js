import React, { useCallback, useEffect, useState, useMemo } from 'react';
import Sidebar from './sidebar/Sidebar';
import Navbar from './navbar/Navbar';
import DisplayCard from './cards/DisplayCard';
import style from '../../client/css/app.css';

export default function App() {
  const [users, setUsers] = useState([]);
  const [chores, setChores] = useState([]);
  const [badWeather, setBadWeather] = useState(false);

  // const choresMem = useCallback( ()=> {

  // })

  // const choresMemo = useMemo(() => chores, [chores]);

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
  }, []);

  return (
    <div className="app">
      <header>
        <Navbar setBadWeather={setBadWeather}/>
      </header>
      <div className="grid-container">
        <Sidebar
          users={users}
          chores={chores}
          setUsers={setUsers}
          setChores={setChores}
          badWeather={badWeather}
        />
        <main className="main">
          <DisplayCard
            users={users}
            chores={chores}
            setUsers={setUsers}
            setChores={setChores}
          />
        </main>
      </div>
    </div>
  );
}
