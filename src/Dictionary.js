import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResuslts] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResuslts(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="dictionary">
        <section>
          <h1>What would you like to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              className="box"
              type="search"
              autoFocus={true}
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
            <input
              type="submit"
              value="search"
              className="btn btn-primary"
              id="search-btn"
            />
          </form>
          <div className="hint">
            suggested words: sunset, wine, forest, coffee
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "loading";
  }
}
