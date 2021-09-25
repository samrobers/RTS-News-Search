import React from "react";
import HomeStyle from "../style/Home.css";

function Main() {
  return (
    <div>
      <body className="h-100 text-center text-white bg-dark min-vh-100  position-relative ">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column p">
          <main className="px-3 position-absolute top-50 start-50 translate-middle ">
            <h1>Hacker News</h1>
            <p className="lead mt-5">Welcome, To begin press Get Started!</p>
            <p className="lead">
              <a
                href="/search"
                className="btn btn-lg btn-secondary fw-bold border-white bg-white mt-5 mb-5"
              >
                Get Started
              </a>
            </p>
          </main>

          <footer className="fixed-bottom text-white-50">
            <p>Author: Sam Roberson</p>
          </footer>
        </div>
      </body>
    </div>
  );
}

export default Main;
