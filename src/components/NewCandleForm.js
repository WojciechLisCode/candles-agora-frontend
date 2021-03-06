import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewCandle } from "../store/actions/allCandles";

export default function NewCandleForm(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [candleName, setCandleName] = useState("");

  const [candleDescription, setCandleDescription] = useState("");
  const [candleUrlPreview, setCandleUrlPreview] = useState("");

  function submitNewCandle(event) {
    event.preventDefault();
    dispatch(
      addNewCandle(
        candleName,
        candleDescription,
        "https://drive.google.com/uc?id=" + candleUrlPreview.split("/")[5],
        1
      )
    );
    setCandleName("");
    setCandleDescription("");
    setCandleUrlPreview("");
    history.push(`/ncl`);
  }

  return (
    <div className="NewCandleForm flex_column border">
      <p className="candleFormTitle">Add new candle:</p>
      <div className="candleFormContainer flex">
        <div className="imagePreviewContainer border flex1">
          <img
            className="previewImage"
            src={
              "https://drive.google.com/uc?id=" + candleUrlPreview.split("/")[5]
            }
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://drive.google.com/uc?id=1d0WesMeaQqF-zfrQ0f0NVQgQnBisXZiU";
            }}
            alt="candle preview"
            width="200"
            height="200"
          ></img>
        </div>
        <form className="formInputs flex_column" onSubmit={submitNewCandle}>
          <div>
            Candle name:
            <input
              className="candleNameInput"
              type="text"
              value={candleName}
              onChange={(e) => {
                setCandleName(e.target.value.toUpperCase());
              }}
            />
          </div>
          <div>
            <p className="candleDesc">Candle description:</p>
            <textarea
              className="candleDescInput"
              value={candleDescription}
              onChange={(e) => {
                setCandleDescription(e.target.value);
              }}
            />
          </div>
          <div>
            Candle image URL:
            <input
              className="imageUrlInput"
              type="text"
              value={candleUrlPreview}
              onChange={(e) => {
                setCandleUrlPreview(e.target.value);
              }}
            />
          </div>
          {candleName !== "" &&
          candleDescription !== "" &&
          candleUrlPreview !== "" ? (
            <button className="submitButton" type="submit">
              Add it!
            </button>
          ) : (
            ""
          )}
        </form>
      </div>
    </div>
  );
}
