import React from "react";

function Results(props) {
  return (
    <>
      <div class="list-group position-absolute top-100 start-50 translate-middle col-sm-7">
        {props.data.map((data) => (
          <a
            href={data.url}
            class="list-group-item list-group-item-action mt-1 mb-1 rounded"
            aria-current="true"
          >
            {data.title}
            <span className=" justify-content-between text-end   p-3">
              Author: {data.author}
            </span>
          </a>
        ))}
      </div>
    </>
  );
}

export default Results;
