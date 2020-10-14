import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getNotGoing, notGoingUser, selectNotGoing } from "./notGoingSlice";

export function NotGoing() {
  const user = useSelector(selectNotGoing);
  const dispatch = useDispatch();
  const [notGoingUser] = useState();
  useEffect(() => {
    dispatch(getNotGoing());
  }, []);

  return (
    <div>
    <h3>Not Going</h3>
    <div id="containerForUser">
  {user.map((user) => (
     <div className="individualCard">
   
        <img className="user-image" src={user.picture} alt="userpic" />
        <span className="info">
             <strong>Name:</strong> {user.first + " " + user.last} {user.last}
        </span> 
        <span className="info">
            <strong>Phone:</strong> {user.phone}
        </span>
        <span className="info">
            <strong>Email:</strong> {user.email}
        </span>

    </div>
    
  ))}
  </div>
</div>
  );
}


