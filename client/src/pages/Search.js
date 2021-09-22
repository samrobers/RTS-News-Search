import React, { useState } from "react";
import { Link } from "react-router-dom";

function Search() {
  let [formState, setFormState] = useState({ search: "" });

  const handleChange = (event) => {
    ("handle Change---");
    setFormState(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("handleFormSubmit---");
  };
  return (
    <>
      <form
        className="navbar-form d-flex justify-content-center"
        onSubmit={handleFormSubmit}
      >
        <input type="text" className="form-control w-25" placeholder="Search" />
        <button type="submit" className="btn btn-primary btn-lg">
          Search
        </button>
      </form>
    </>
  );
}

export default Search;
