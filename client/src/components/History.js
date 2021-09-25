import React from "react";
import { useStoreContext } from "../store/Store";
function History() {
  const [state, dispatch] = useStoreContext();
  console.log(state.history, " ---this is state history");
  return (
    <>
      <h1 className="text-white position-absolute top-0 start-50 translate-middle-x bg-dark">
        History
      </h1>
      <a href="/home" className="">
        <button className="btn  btn-primary position-absolute top-0 end-0 me-5 mt-5 btn-lg">
          Home
        </button>
      </a>
      <div className=" position-absolute top-50 start-50 translate-middle fs-5  ">
        <ol class="list-group list-group-numbered">
          {state.history.map((data) => {
            return <li className="list-group-item mb-3">{data}</li>;
          })}
        </ol>
      </div>
    </>
  );
}

export default History;
