import React from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

export default function CandleDetails() {
  const { id } = useParams();
  return (
    <div>
      <h2>CandleDetails {id}</h2>
    </div>
  );
}
