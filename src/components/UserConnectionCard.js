import "../styles/userConnectionCard.css";

import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectMeUser } from "../store/selectors/meUser";
import { deleteConnection } from "../store/actions/userDetails";

export default function UserConnectionCard(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const meUser = useSelector(selectMeUser);
  const connectionType = props.connectionType;
  const connectionId = props.connectionId;

  function deleteButton() {
    dispatch(deleteConnection(connectionType, connectionId));
    setTimeout(() => {
      history.push(`/user/${meUser.id}`);
    }, 500);
  }

  console.log("type:", connectionType, "id:", connectionId);
  return (
    <Link className="UserConnectionCard" to={`/candle/${props.candleId}`}>
      <div>
        <h3>{props.name}</h3>
        <img className="image" src={props.imageUrl} alt={props.name}></img>
        <p>{props.text}</p>
        {meUser.isAdmin || meUser.id === props.userId ? (
          <button className="userButton" onClick={deleteButton}>
            Delete relation
          </button>
        ) : (
          ""
        )}
      </div>
    </Link>
  );
}
