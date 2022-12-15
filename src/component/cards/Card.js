import React, { useEffect, useState } from 'react';
import CardRoom from './CardRoom';
import Icon from '@mdi/react'; //module for icons
import { mdiDeleteForeverOutline, mdiCogOutline } from '@mdi/js'; //module for icons
import classNames from 'classnames';

const Card = ({ userName, userID, chores, setUsers }) => {
  //delete user from database
  const deleteUser = async () => {
    const response = await fetch('/user', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: userID }),
    });
    const data = await response.json();
    setUsers((prev) => prev.filter((user) => user.name !== userName)); //filtering out the deleted user from the state

    console.log('Delete Data:', data);
  };

  //edit data from database
  const editData = async () => {
    const response = await fetch('/chore', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: userName }),
    });
    const data = await response.json();
    console.log('Edited Data:', data);
  };

  //click on delete button
  const onDelete = async (e) => {
    e.preventDefault();
    try {
      await deleteUser();
      console.log('Delete Data:', deleteUser);
    } catch (err) {
      console.error(err.message);
    }
  };

  //click on edit button
  const onEdit = async (e) => {
    e.preventDefault();
    try {
      await editData();
      console.log('Edited Data:', editData);
    } catch (err) {
      console.error(err.message);
    }
  };

  //filtering chores by room
  const roomObj = {};

  const rooms = chores.map((chore) => {
    //set variable room to equal to room value of each chore object
    const room = chore.room;
    //if roomObj at key room is undefined
    if (roomObj[room] === undefined) {
      //set new key value pair in roomObj and set value equal to an empty array
      roomObj[room] = [];
    }
    //push chore object into key value array
    roomObj[room].push(chore);
  });

  // console.log('ROOMOBJ:', roomObj);

  // console.log('USER ROOMS:', userRooms);
  //rendering rooms and chores
  const onlyRooms = Object.keys(roomObj).map((room, index) => {
    //rendering rooms, filtering chores by room
    const userRooms = chores.map((chore, index) => {
      // IF THE USER IS ASSIGNED TO THE ROOM && IF THE ROOM OF THE CHORE IS EQUAL TO THE ROOM THAT WE JUST MADE A DIV OF
      console.log('chore!!!!!!!!!!!', chore);
      if (chore.assigned_user_id === userID && chore.room === room) {
        return <CardRoom key={index} chores={chore} />;
      }
    });

    return (
      <div className="card-component" key={index}>
        <div className="room-name">{room}</div>
        {userRooms}
      </div>
    );
  });

  console.log('CHORES: ', chores);
  return (
    <div className="card bg-primary">
      <div className="card-name bg-secondary">
        <h3>{userName}</h3>
      </div>
      {onlyRooms}
      <div className="footer">
        <div className="actionsContainer">
          <button
            className="deleteBtn"
            type="submit"
            onClick={(e) => onDelete(e)}
          >
            <Icon
              path={mdiDeleteForeverOutline}
              size={1}
              horizontal
              vertical
              rotate={180}
              color="white"
            />
          </button>
          <button className="editBtn" type="submit" onClick={(e) => onEdit(e)}>
            <Icon
              path={mdiCogOutline}
              size={1}
              horizontal
              vertical
              rotate={180}
              color="white"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
