import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { fetchCandleById } from "../store/actions/candleDetails";
import { selectCandleDetails } from "../store/selectors/candleDetails";

import NewConnectionForm from "../components/NewConnectionForm";
import { selectMeUser } from "../store/selectors/meUser";

export default function CandleDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const [connectionsSorting, setConnectionsSorting] =
    useState("I want that candle");
  const candleDetails = useSelector(selectCandleDetails);
  const meUser = useSelector(selectMeUser);
  let connectionsList = [];

  useEffect(() => {
    dispatch(fetchCandleById(id));
  }, [dispatch, id, message, connectionsSorting]);

  console.log(connectionsSorting);

  if (connectionsSorting === "I want that candle" && candleDetails !== null) {
    connectionsList = candleDetails.wants;
    console.log(connectionsList);
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
      <div>
        <div>
          <h2>{candleDetails.name}</h2>
          <p>{candleDetails.description}</p>
        </div>
        <div>
          <div>
            <img src={candleDetails.imageUrl} alt={candleDetails.name}></img>
          </div>
          <div>
            ralations
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
            {connectionsList.map((connection) => {
              console.log(meUser);
              return (
                <div>
                  <Link to={`/user/${connection.id}`}>
                    <p>{connection.name}:</p>
                    {connection.iCanSellCandle ? (
                      <p>{connection.iCanSellCandle.connectionText}</p>
                    ) : connection.iDidHaveCandle ? (
                      <p>{connection.iDidHaveCandle.connectionText}</p>
                    ) : connection.iHaveCandle ? (
                      <p>{connection.iHaveCandle.connectionText}</p>
                    ) : (
                      <p>{connection.iWantCandle.connectionText}</p>
                    )}
                  </Link>
                </div>
              );
            })}
          </div>

          <div>
            <p>{message}</p>
            <NewConnectionForm
              candleId={candleDetails.id}
              userId={meUser.id}
              setMessage={setMessage}
              setConnectionsSorting={setConnectionsSorting}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
}
