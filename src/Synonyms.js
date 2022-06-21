import React from "react";

export default function Synonyms(props) {
  if (props.response) {
    return (
      <ul className="Synonyms">
        {props.response.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
