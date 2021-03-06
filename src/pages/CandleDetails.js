import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link, useParams } from "react-router-dom";

import { fetchCandleById } from "../store/actions/candleDetails";
import { selectCandleDetails } from "../store/selectors/candleDetails";
import { selectMeUser } from "../store/selectors/meUser";
import { deleteCandle } from "../store/actions/candleDetails";

import NewConnectionForm from "../components/NewConnectionForm";

export default function CandleDetails() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const [connectionsSorting, setConnectionsSorting] =
    useState("I want that candle");
  const candleDetails = useSelector(selectCandleDetails);
  const meUser = useSelector(selectMeUser);
  let connectionsList = [];

  function deleteButton() {
    dispatch(deleteCandle(candleDetails.id));
    setTimeout(() => {
      history.push("/");
    }, 500);
  }

  useEffect(() => {
    dispatch(fetchCandleById(id));
  }, [dispatch, id, message, connectionsSorting]);

  if (connectionsSorting === "I want that candle" && candleDetails !== null) {
    connectionsList = candleDetails.wants;
  } else if (
    connectionsSorting === "I have that candle" &&
    candleDetails !== null
  ) {
    connectionsList = candleDetails.have;
  } else if (
    connectionsSorting === "I had that candle" &&
    candleDetails !== null
  ) {
    connectionsList = candleDetails.had;
  } else if (
    connectionsSorting === "I can let it go" &&
    candleDetails !== null
  ) {
    connectionsList = candleDetails.dontNeed;
  } else {
  }
  if (candleDetails !== null) {
    return (
      <div className="CandleDetails flex_column back_grad align_c minh1000">
        {meUser.isAdmin ? (
          <div className="buttonsBar w_full">
            <button className="userButton" onClick={deleteButton}>
              Delete this candle
            </button>
          </div>
        ) : (
          <div className="buttonsBar w_full"></div>
        )}
        <div className="candleData flex m0 w_full">
          <div className="candleDescription m0">
            <img
              className="candleImage border"
              src={candleDetails.imageUrl}
              alt={candleDetails.name}
            ></img>
            <h2>{candleDetails.name}</h2>
            <p>{candleDetails.description}</p>
          </div>
          <div className="candleRelations flex_column p10 m0 w_full">
            {meUser.token !== null ? (
              <div className="newConnection border p10">
                <p>{message}</p>
                <NewConnectionForm
                  candleId={candleDetails.id}
                  userId={meUser.id}
                  setMessage={setMessage}
                  setConnectionsSorting={setConnectionsSorting}
                />
              </div>
            ) : (
              <div></div>
            )}
            <div className="existingConnections flex_column p10 align_c">
              <h2>Existing relations:</h2>
              <select
                className="existingConnectionsSelector"
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
              {connectionsList.map((connection) => {
                return (
                  <div
                    className="connectionCard border m50 w_full"
                    key={connection.id}
                  >
                    <Link to={`/user/${connection.id}`}>
                      <p>
                        <b>{connection.name}:</b>
                      </p>
                      {connection.iCanSellCandle ? (
                        <p className="connectionDescription">
                          {connection.iCanSellCandle.connectionText}
                        </p>
                      ) : connection.iDidHaveCandle ? (
                        <p className="connectionDescription">
                          {connection.iDidHaveCandle.connectionText}
                        </p>
                      ) : connection.iHaveCandle ? (
                        <p className="connectionDescription">
                          {connection.iHaveCandle.connectionText}
                        </p>
                      ) : (
                        <p className="connectionDescription">
                          {connection.iWantCandle.connectionText}
                        </p>
                      )}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
}
