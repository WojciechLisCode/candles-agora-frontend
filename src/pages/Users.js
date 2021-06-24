import "../styles/users.css";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

import { selectAllUsers } from "../store/selectors/allUsers";
import { fetchAllUsers } from "../store/actions/allUsers";

import UserCard from "../components/UserCard";

export default function Users() {
  const dispatch = useDispatch();

  const [searchInput, setSearchInput] = useState("");
  const [sortingMethod, setSortingMethod] = useState("alphebetical ▲");
  const allUsers = useSelector(selectAllUsers);

  useEffect(() => {
    dispatch(fetchAllUsers(searchInput));
  }, [dispatch, searchInput]);

  if (allUsers !== null && sortingMethod === "alphebetical ▲") {
    allUsers.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  } else if (allUsers !== null && sortingMethod === "alphebetical ▼") {
    allUsers.sort(function (a, b) {
      if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }
      return 0;
    });
  } else if (allUsers !== null && sortingMethod === "I want that candle ▲") {
    allUsers.sort(function (a, b) {
      return a.wants.length - b.wants.length;
    });
  } else if (allUsers !== null && sortingMethod === "I want that candle ▼") {
    allUsers.sort(function (a, b) {
      return b.wants.length - a.wants.length;
    });
  } else if (allUsers !== null && sortingMethod === "I have that candle ▲") {
    allUsers.sort(function (a, b) {
      return a.have.length - b.have.length;
    });
  } else if (allUsers !== null && sortingMethod === "I have that candle ▼") {
    allUsers.sort(function (a, b) {
      return b.have.length - a.have.length;
    });
  } else if (allUsers !== null && sortingMethod === "I had that candle ▲") {
    allUsers.sort(function (a, b) {
      return a.had.length - b.had.length;
    });
  } else if (allUsers !== null && sortingMethod === "I had that candle ▼") {
    allUsers.sort(function (a, b) {
      return b.had.length - a.had.length;
    });
  } else if (allUsers !== null && sortingMethod === "I can let it go ▲") {
    allUsers.sort(function (a, b) {
      return a.dontNeed.length - b.dontNeed.length;
    });
  } else if (allUsers !== null && sortingMethod === "I can let it go ▼") {
    allUsers.sort(function (a, b) {
      return b.dontNeed.length - a.dontNeed.length;
    });
  }
  return (
    <div className="Users">
      <div className="searchAndSort">
        Search by name:
        <input
          className="sortingInput"
          type="text"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value.toUpperCase());
          }}
        ></input>
        Sort by:
        <select
          className="sortingInput"
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
      {allUsers === null ? (
        <div>Loading</div>
      ) : (
        <div className="usersList">
          {allUsers.map((user) => {
            return (
              <div key={user.id} className="userCardContainer">
                <Link to={`/user/${user.id}`}>
                  <UserCard
                    isAdmin={user.isAdmin}
                    isBlocked={user.isBlocked}
                    name={user.name}
                    wants={user.wants.length}
                    have={user.have.length}
                    had={user.had.length}
                    dontNeed={user.dontNeed.length}
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
