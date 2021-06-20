import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { fetchUserById } from "../store/actions/userDetails";
import { selectUserDetails } from "../store/selectors/userDetails";
import { selectMeUser } from "../store/selectors/meUser";

import UserConnectionCard from "../components/userConnectionCard";

export default function UserDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [connectionsSorting, setConnectionsSorting] =
    useState("I want that candle");
  const userDetails = useSelector(selectUserDetails);
  const meUser = useSelector(selectMeUser);
  let connectionsList = [];

  useEffect(() => {
    dispatch(fetchUserById(id));
  }, [dispatch, id, connectionsSorting]);

  console.log(connectionsSorting);

  if (connectionsSorting === "I want that candle" && userDetails !== null) {
    connectionsList = userDetails.wants;
    console.log(connectionsList);
  } else if (
    connectionsSorting === "I have that candle" &&
    userDetails !== null
  ) {
    connectionsList = userDetails.have;
  } else if (
    connectionsSorting === "I had that candle" &&
    userDetails !== null
  ) {
    connectionsList = userDetails.had;
  } else if (connectionsSorting === "I can let it go" && userDetails !== null) {
    connectionsList = userDetails.dontNeed;
  } else {
  }
  console.log(connectionsList);
  if (userDetails !== null) {
    return (
      <div>
        <div>
          <h1>{userDetails.name}</h1>
          <p>{userDetails.isAdmin ? "admin" : " "}</p>
          <p>{userDetails.isBlocked ? "BLOCKED!!" : " "}</p>
        </div>
        <div>
          <button>Send a message</button>
        </div>
        <div>
          <h3>My candles:</h3>
          <select
            value={connectionsSorting}
            onChange={(e) => {
              setConnectionsSorting(e.target.value);
            }}
          >
            <option>I want that candle</option>
            <option>I have that candle</option>
            <option>I had that candle </option>
            <option>I can let it go</option>
          </select>
        </div>

        {connectionsList.map((connection) => {
          return (
            <div key={connection.id}>
              <UserConnectionCard
                name={connection.name}
                text={
                  connectionsSorting === "I want that candle"
                    ? connection.iWantCandle.connectionText
                    : connectionsSorting === "I have that candle"
                    ? connection.iHaveCandle.connectionText
                    : connectionsSorting === "I had that candle"
                    ? connection.iDidHaveCandle.connectionText
                    : connection.iCanSellCandle.connectionText
                }
                candleId={connection.id}
                imageUrl={connection.imageUrl}
              />
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
}
