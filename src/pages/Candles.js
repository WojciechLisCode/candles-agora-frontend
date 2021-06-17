import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

import { selectAllCandles } from "../store/selectors/allCandles";
import { selectMeUser } from "../store/selectors/meUser";
import { fetchAllCandles } from "../store/actions/allCandles";

import CandleCard from "../components/CandleCard";
import NewCandleForm from "../components/NewCandleForm";

export default function Candles() {
  const dispatch = useDispatch();

  const [searchInput, setSearchInput] = useState("");
  const [sortingMethod, setSortingMethod] = useState("alphebetical ▲");
  const allCandles = useSelector(selectAllCandles);
  const meUser = useSelector(selectMeUser);

  useEffect(() => {
    dispatch(fetchAllCandles(searchInput));
  }, [dispatch, searchInput]);

  if (allCandles !== null && sortingMethod === "alphebetical ▲") {
    allCandles.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  } else if (allCandles !== null && sortingMethod === "alphebetical ▼") {
    allCandles.sort(function (a, b) {
      if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }
      return 0;
    });
  } else if (allCandles !== null && sortingMethod === "I want that candle ▲") {
    allCandles.sort(function (a, b) {
      return a.wants.length - b.wants.length;
    });
  } else if (allCandles !== null && sortingMethod === "I want that candle ▼") {
    allCandles.sort(function (a, b) {
      return b.wants.length - a.wants.length;
    });
  } else if (allCandles !== null && sortingMethod === "I have that candle ▲") {
    allCandles.sort(function (a, b) {
      return a.have.length - b.have.length;
    });
  } else if (allCandles !== null && sortingMethod === "I have that candle ▼") {
    allCandles.sort(function (a, b) {
      return b.have.length - a.have.length;
    });
  } else if (allCandles !== null && sortingMethod === "I had that candle ▲") {
    allCandles.sort(function (a, b) {
      return a.had.length - b.had.length;
    });
  } else if (allCandles !== null && sortingMethod === "I had that candle ▼") {
    allCandles.sort(function (a, b) {
      return b.had.length - a.had.length;
    });
  } else if (allCandles !== null && sortingMethod === "I can let it go ▲") {
    allCandles.sort(function (a, b) {
      return a.dontNeed.length - b.dontNeed.length;
    });
  } else if (allCandles !== null && sortingMethod === "I can let it go ▼") {
    allCandles.sort(function (a, b) {
      return b.dontNeed.length - a.dontNeed.length;
    });
  }
  return (
    <div>
      <div>
        <h3>search:</h3>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value.toUpperCase());
          }}
        ></input>
        <div>
          Sort by:
          <select
            value={sortingMethod}
            onChange={(e) => {
              setSortingMethod(e.target.value);
            }}
          >
            <option>alphebetical ▲</option>
            <option>alphebetical ▼</option>
            <option>I want that candle ▲</option>
            <option>I want that candle ▼</option>
            <option>I have that candle ▲</option>
            <option>I have that candle ▼</option>
            <option>I had that candle ▲</option>
            <option>I had that candle ▼</option>
            <option>I can let it go ▲</option>
            <option>I can let it go ▼</option>
          </select>
        </div>
      </div>
      {allCandles === null ? (
        <div>Loading</div>
      ) : (
        <div>
          <div>{meUser.isAdmin ? <NewCandleForm /> : ""}</div>
          {allCandles.map((candle) => {
            return (
              <div key={candle.id}>
                <Link to={`/candle/${candle.id}`}>
                  <CandleCard
                    name={candle.name}
                    imageUrl={candle.imageUrl}
                    description={candle.description}
                    wants={candle.wants.length}
                    have={candle.have.length}
                    had={candle.had.length}
                    dontNeed={candle.dontNeed.length}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
