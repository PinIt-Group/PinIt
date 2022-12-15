import React from 'react';

const ListChore = ({
  chores,
  selectedChoreId,
  setSelectedChoreId,
  selectedRoom,
}) => {
  const choresArr = [];

  chores.map((value) => {
    if (value.room === selectedRoom) {
      choresArr.push(
        <option
          value={selected} //value.id
          id={selected}
          key={value.chore}
          name={selected}
        >
          {value.chore}
        </option>
      );
    }
  });
  let selected;
  return (
    <select
      className="select"
      value={selectedChoreId}
      onChange={(e) => {
        selected = e.target.value;
        setSelectedChoreId(e.target.value);
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
