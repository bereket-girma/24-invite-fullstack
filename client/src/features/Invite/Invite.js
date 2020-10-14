import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectNotGoing } from "../notGoing/notGoingSlice";
import { selectGoing } from "../Going/goingSlice";
import {
  selectInvite,
  randomUser,
  getInvite,
  addGoing,
  addNotGoing,
} from "./inviteSlice";
import { Link } from "react-router-dom";
import "./invite.css";

export function Invite() {
  const user = useSelector(selectInvite);
  const dispatch = useDispatch();

  //   const notGoingUser = useSelector(selectNotGoing);

  //   const goingUser = useSelector(selectGoing);

  //   const [randomUser] = useState();
  const [going, setGoing] = useState(0);
  const [Notgoing, setNotGoing] = useState(0);

  useEffect(() => {
    dispatch(getInvite());
  }, []);

  function handleNotGoing(e) {
    e.preventDefault();
    dispatch(addNotGoing(user));
    setNotGoing(Notgoing + 1);
    // dispatch(getInvite(user));
  }

  function handleGoing(e) {
    e.preventDefault();
    dispatch(addGoing(user));
    setGoing(going + 1);
  }

  return (
    <div>
      <div className="userContainer">
        <div className="attending">
          <Link to="/going">Going: {going}</Link>
          <Link to="/notGoing">Not going: {Notgoing}</Link>
        </div>

        <div className="userInfo">
          <img className="user-image" src={user.picture} alt="userpic" />
          <div>
            {" "}
            <hr></hr>
          </div>
          <div className="info">
            <strong>Name:</strong> {user.first + " " + user.last} {user.last}
          </div>

          <div className="info">
            <strong>Phone:</strong> {user.phone}
          </div>

          <div className="info">
            <strong>Email:</strong> {user.email}
          </div>
        </div>
        <div>
          <hr></hr>
        </div>
        <div className="button-div">
          <button onClick={handleNotGoing} className="x-button">
            x
          </button>
          <button onClick={handleGoing} className="check-button">
            &#10003;
          </button>
        </div>
      </div>
    </div>
  );
}
