import React from 'react';

const AssignChore = ({ selectedChoreId, selectedUserId }) => {
  const assignChore = (e) => {
    e.preventDefault();
    // console.log(selectedChoreId, selectedUserId);
    console.log('ASSIGN CHORE ID:', selectedChoreId);
    console.log('ASSIGN USER ID:', selectedUserId);
    fetch('http://localhost:3000/chore', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        choreID: selectedChoreId,
        userID: selectedUserId,
        assign: true,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location.pathname = '/';
        // window.location.href = 'http://localhost:8080';
        // let navigate = useNavigate();
        // navigate('/chore');
        // setTrigger(trigger + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="AssignChore">
      <input
        className="btn btn-primary"
        type="submit"
        value="Submit"
        onClick={assignChore}
      />
    </div>
  );
};

export default AssignChore;
