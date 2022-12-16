import React from 'react';

const AssignChore = ({
  selectedChoreId,
  selectedUserId,
  setUsers,
  setChores,
  setChoreShown,
}) => {
  const assignChore = (e) => {
    e.preventDefault();
    console.log('ASSIGN CHORE ID:', selectedChoreId);
    console.log('ASSIGN USER ID:', selectedUserId);
    fetch('http://localhost:3000/chore/reassign', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        choreID: selectedChoreId, /// SOMETHING IS WRONG HERE!!!
        userID: selectedUserId,
        assign: true,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // window.location.pathname = '/';
        fetch('/choresAndUsers')
          .then((response) => response.json())
          .then((data) => {
            console.log('THIS IS THE CONSOLE LOG THAT RERENDERS');
            setUsers(data.users);
            setChores(data.chores);
            // setChoreShown((choreShown) => !choreShown);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
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
        onClick={(e) => assignChore(e)}
      />
    </div>
  );
};

export default AssignChore;
