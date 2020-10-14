import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getGoing, goingUser, selectGoing } from "./goingSlice";

export function Going() {
  const user = useSelector(selectGoing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGoing());
  }, []);

  return (
    <div className="">
      {user.map((user) => (
        <p>{user.first}</p>
      ))}
    </div>
  );
}

