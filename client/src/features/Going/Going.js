import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getGoing, goingUser, selectGoing } from "./goingSlice";
import './going.css'

export function Going() {
  const user = useSelector(selectGoing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGoing());
  }, []);

  return (
    <div>
        <h3>Going</h3>
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


