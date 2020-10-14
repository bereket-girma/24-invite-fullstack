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
    <div className="">
      {user.map((user) => (
        <p>{user.first}</p>
      ))}
    </div>
  );
}


