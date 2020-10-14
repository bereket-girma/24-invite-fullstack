import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectInvite, randomUser, getInvite, addGoing, addNotGoing } from "./inviteSlice";
import {Link} from "react-dom"
// import {selectGoing} from 

export function Invite() {
  const user = useSelector(selectInvite);
  const dispatch = useDispatch();
  const [randomUser] = useState();
  const [going, setGoing] = useState(0);
  useEffect(() => {
    dispatch(getInvite());
  }, []);

  function handleGoing() {
      dispatch(addGoing(user));
      setGoing(going + 1)
  }

  function handleNotGoing() {
      dispatch(addNotGoing(user));
  }


  return (
    <div className="container">
      <p>hello</p>

      <div className="attending">
        <div className="going">
         
            <button onClick={() => handleGoing()}>Going:</button>
         
        </div>
        <div className="notGoing">
          
           <button onClick={() => handleNotGoing()}>Not Going:</button> 
        </div>
      </div>

      <div className="App">
        <div className="image-div">
          <img className="user-image" src={user.picture} alt="userpic" />
        </div>
        <div className="info">
          <strong>Name:</strong> {user.first} {user.last}
        </div>
        <div className="info">
          <strong>Phone:</strong> {user.phone}
        </div>
        <div className="info">
          <strong>Email:</strong> {user.email}
        </div>

        {/* button */}
        <div className="button-div">
          <button className="x-button">x</button>
          <button className="check-button">&#10003;</button>
        </div>
      </div>
    </div>
  );
}



{/* <div className="attending">
        <div className="going">
          <Link to="/going">
            Going:{usersGoing ? usersGoing.length : 0}
          </Link>
        </div>
        <div className="notGoing">
          <Link to="/notGoing">
            Not Going:{usersNotGoing ? usersNotGoing.length : 0}
          </Link>
        </div>
      </div> */}