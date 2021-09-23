import axios from "axios";
export const getAllMatchups = async () => {
  return await fetch("http://hn.algolia.com/api/v1/search?query=tech", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// Using axios, we create a search method that is specific to our use case and export it at the bottom
export const searchIt = () =>
  axios.get(`http://hn.algolia.com/api/v1/search?query=tech`);

// Export an object with a "search" method that searches the Giphy API for the passed query

