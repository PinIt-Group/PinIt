import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const ListName = ({ users, selectedUserId, setSelectedUserId }) => {
  return (
    <select
      className="select"
      defaultValue={selectedUserId}
      onChange={(e) => setSelectedUserId(e.target.value)}
      selected
    >
      <optgroup>
        <option disabled selected className="optgroup">
          Name
        </option>
        {users.map((value) => (
          <option value={value.id} key={value.name} className="optgroup">
            {value.name}
          </option>
        ))}
      </optgroup>
    </select>
  );
};

export default ListName;
