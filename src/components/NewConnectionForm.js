import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewConnection } from "../store/actions/candleDetails";

export default function NewConnectionForm(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [connectionType, setConnectionType] = useState("I want that candle");
  const [connectionText, setConnectionText] = useState("");

  function submitNewCandle(event) {
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
    setConnectionType("I want that candle");
    setConnectionText("");

    // history.push(`/ncl`);
  }

  return (
    <div>
      <div>
        <h2>Add your connection:</h2>
        <form on onSubmit={submitNewCandle}>
          <div>
            <select
              value={connectionType}
              onChange={(e) => {
                setConnectionType(e.target.value);
              }}
            >
              <option>I want that candle</option>
              <option>I have that candle</option>
              <option>I had that candle </option>
              <option>I can let it go</option>
            </select>
          </div>{" "}
          <div>
            <p>description:</p>
            <textarea
              value={connectionText}
              onChange={(e) => {
                setConnectionText(e.target.value);
              }}
            />
          </div>
          {connectionType !== "" && connectionText !== "" ? (
            <button type="submit">Add it!</button>
          ) : (
            ""
          )}
        </form>
      </div>
    </div>
  );
}
