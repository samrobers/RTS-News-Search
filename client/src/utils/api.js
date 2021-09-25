export const searchHackerApi = async (args) => {
  return (
    await fetch("http://hn.algolia.com/api/v1/search?query=", args),
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
