import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { searchIt } from "../utils/api";

function Search() {
  const [keywords, setKeywords] = useState("");
  const [fetchedData, setFetchedData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`http://hn.algolia.com/api/v1/search?query=${keywords}`)
      .then((res) => {
        console.log(res, "the inital response");
        setFetchedData(res.data);
        console.log(fetchedData, "this is fetched data state update");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setKeywords(e.target.value);
    console.log(keywords, "----keywords---");
  };
  return (
    <>
      <header className="fs-1 text-white position-absolute top-15 start-50 translate-middle">
        Hacker News
      </header>
      <form
        className="mt-5 bg-dark navbar-form d-flex justify-content-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="form-control w-25 mt-5"
          placeholder="Search by Title"
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary btn-lg mt-5">
          Search
        </button>
      </form>
      {fetchedData ? (
        <div className="list-group position-absolute top-50 start-50 translate-middle col-sm-7">
          {fetchedData.map((post) => {
            return <h1>{post.data.title}</h1>;
          })}
        </div>
      ) : (
        <div>
          <header className=" fs-3 text-white position-absolute top-50 start-50 translate-middle">
            Search Something!
          </header>
        </div>
      )}
    </>
  );
}

export default Search;
