import React from 'react';

const ListChore = ({
  chores,
  selectedChoreId,
  setSelectedChoreId,
  selectedRoom,
}) => {
  const choresArr = [];
  let selected;

  chores.map((value) => {
    if (value.room === selectedRoom) {
      choresArr.push(
        <option
          value={selected} //value.id
          id={value.id}
          key={value.chore}
          name={selected}
        >
          {value.chore}
        </option>
      );
    }
  });

  return (
    <select
      className="select"
      value={selectedChoreId}
      onChange={(e) => {
        selected = e.currentTarget.value;
        setSelectedChoreId(e.currentTarget.value); //SOMETHING IS WRONG HERE!
      }}
      selected
    >
      <option value="" disabled selected>
        Chore
      </option>
      {choresArr}
    </select>
  );
};

export default ListChore;
