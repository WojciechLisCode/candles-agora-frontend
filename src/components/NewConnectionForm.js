import "../styles/newConnectionForm.css";

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewConnection } from "../store/actions/candleDetails";
import { fetchCandleById } from "../store/actions/candleDetails";

export default function NewConnectionForm(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [connectionType, setConnectionType] = useState("iWantCandle");
  const [connectionText, setConnectionText] = useState("");

  function submitNewConnection(event) {
    event.preventDefault();
    console.log("type: ", connectionType, " text: ", connectionText);
    dispatch(
      addNewConnection(
        connectionType,
        connectionText,
        props.candleId,
        props.userId
      )
    );
    setConnectionType("iWantCandle");
    setConnectionText("");
    props.setConnectionsSorting(
      connectionType === "iHaveCandle"
        ? "I have that candle"
        : connectionType === "iWantCandle"
        ? "I want that candle"
        : connectionType === "iDidHaveCandle"
        ? "I had that candle"
        : "I can let it go"
    );
    props.setMessage("Your connection was added");
  }

  return (
    <div className="NewConnectionForm">
      <p>Add your relation</p>
      <form on onSubmit={submitNewConnection}>
        <div>
          <select
            value={connectionType}
            onChange={(e) => {
              setConnectionType(e.target.value);
            }}
          >
            <option value="iWantCandle">I want that candle</option>
            <option value="iHaveCandle">I have that candle</option>
            <option value="iDidHaveCandle">I had that candle </option>
            <option value="iCanSellCandle">I can let it go</option>
          </select>
        </div>{" "}
        <div>
          <textarea
            value={connectionText}
            onChange={(e) => {
              setConnectionText(e.target.value);
            }}
          />
        </div>
        {connectionType !== "" && connectionText !== "" ? (
          <button className="userButton" type="submit">
            Add it!
          </button>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}
