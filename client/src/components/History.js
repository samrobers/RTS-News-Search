import React, { useContext } from "react";
import { useStoreContext } from "../store/Store";
function History() {
  const [state, dispatch] = useStoreContext();
  console.log(state.history, " ---this is state history");
  return (
    <>
      <div className="list-group position-absolute top-50 start-50 translate-middle  text-white">
        {state.history.map((data) => {
          return <li className="text-white">{data}</li>;
        })}
      </div>
    </>
  );
}

export default History;
