import "../styles/userDetails.css";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { fetchUserById } from "../store/actions/userDetails";
import { sendMessage } from "../store/actions/allUsers";
import { toggleAdmin } from "../store/actions/allUsers";
import { selectUserDetails } from "../store/selectors/userDetails";
import { selectMeUser } from "../store/selectors/meUser";

import UserConnectionCard from "../components/UserConnectionCard";

export default function UserDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [messageText, setMessageText] = useState("");
  const [messageTop, setMessageTop] = useState("");
  const [confirmationText, setConfirmationText] = useState("");
  const [messageFormDisplay, setMessageFormDisplay] = useState(false);
  const [connectionsSorting, setConnectionsSorting] =
    useState("I want that candle");
  const userDetails = useSelector(selectUserDetails);
  const meUser = useSelector(selectMeUser);
  let connectionsList = [];

  useEffect(() => {
    dispatch(fetchUserById(id));
  }, [dispatch, id, connectionsSorting, messageTop]);

  function adminButton() {
    dispatch(toggleAdmin(userDetails.id));
    setMessageTop("Admin status changed");
    setTimeout(() => {
      setMessageTop("");
    }, 1500);
  }

  function messageFormSubmit(event) {
    event.preventDefault();
    dispatch(
      sendMessage(messageText, meUser.name, meUser.id, userDetails.email)
    );
    setMessageFormDisplay(!messageFormDisplay);
    setConfirmationText(`Message was sent to ${userDetails.name}`);
  }

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
      <div className="UserDetails">
        {meUser.isAdmin && meUser.id !== userDetails.id ? (
          <div className="buttonsBar">
            <button className="userButton" onClick={adminButton}>
              Toggle "Admin" status
            </button>
            <button className="userButton">Toggle "Blocked" status</button>
          </div>
        ) : (
          <div className="buttonsBar"></div>
        )}
        <div>{messageTop}</div>
        <div className="userData">
          <h1>{userDetails.name}</h1>
          <p className="userDetailsStatus">
            {userDetails.isAdmin ? "Admin" : " "}
          </p>
          <p>{userDetails.isBlocked ? "BLOCKED!!" : " "}</p>

          <div>
            {meUser.token !== null && meUser.id !== userDetails.id ? (
              <button
                className="userButton"
                onClick={() => {
                  setMessageFormDisplay(!messageFormDisplay);
                  setConfirmationText("");
                }}
              >
                ▼ Message ▼
              </button>
            ) : (
              " "
            )}
            {messageFormDisplay && meUser.id !== userDetails.id ? (
              <form onSubmit={messageFormSubmit}>
                <div>
                  <textarea
                    className="messageTextArea"
                    value={messageText}
                    onChange={(e) => {
                      setMessageText(e.target.value);
                    }}
                  ></textarea>
                </div>
                {messageText ? (
                  <button className="userButton" type="submit">
                    Send
                  </button>
                ) : (
                  ""
                )}
              </form>
            ) : (
              ""
            )}
            <div>
              <p>{confirmationText}</p>
            </div>
          </div>
          <div>
            <h3>My relations:</h3>
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
        </div>
        <div className="userConnectionsList">
          {connectionsList.map((connection) => {
            console.log(connection);
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
                  connectionId={connection.id}
                  userId={userDetails.id}
                  connectionType={
                    connectionsSorting === "I want that candle"
                      ? "iWantCandle"
                      : connectionsSorting === "I have that candle"
                      ? "iHaveCandle"
                      : connectionsSorting === "I had that candle"
                      ? "iDidHaveCandle"
                      : "iCanSellCandle"
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
}
