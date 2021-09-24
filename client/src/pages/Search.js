import axios from "axios";
import React, { useState } from "react";
import Results from "../components/results/Results";
import History from "../components/History";
function Search() {
  const [keywords, setKeywords] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);
  const [dataCheck, setDataCheck] = useState(false);
  const [historyData, setHistoryData] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`http://hn.algolia.com/api/v1/search?query=${keywords}`)
      .then((res) => {
        console.log(
          res,
          "the inital response after fetch call in handle submit"
        );
        setFetchedData(res.data.hits);
        setDataCheck(true);
        console.log(
          fetchedData,
          "this is fetched data state update after drilled to hits"
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleHistory = (e) => {
    if (keywords) {
      console.log(keywords, "-----keyword data-----");
      setHistoryData(true);
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    setKeywords(e.target.value);
    console.log(keywords, "----keywords---");
  };
  console.log(fetchedData, "-----fetched data");
  if (!dataCheck) {
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
        <div>
          <header className=" fs-3 text-white position-absolute top-50 start-50 translate-middle">
            Search Something!
          </header>
        </div>
      </>
    );
  }
  if (dataCheck) {
    return (
      <>
        <header className="fs-1 text-white position-absolute top-15 start-50 translate-middle">
          Hacker News with data
        </header>
        <a href="/history">
          <button
            onChange={handleHistory}
            className="btn btn-primary btn-lg me-5 mt-5 position-absolute top-0 end-0"
          >
            History
          </button>
        </a>
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
        <Results data={fetchedData} />
        <div className="list-group position-absolute top-50 start-50 translate-middle col-sm-7"></div>
      </>
    );
  }
  if (dataCheck & historyData) {
    return <History data={keywords} />;
  }
}

export default Search;
