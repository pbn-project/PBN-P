import React from "react";
import "./Library.css";
import { Link } from "react-router-dom";

function Library() {
  return (
    <>
      <div className="library-container1">
        <div className="filter-div">
          <Link to="/project">
            <img src="images/hey.gif"></img>
          </Link>
        </div>

        <div className="filter-div">
          <div className="locked">
            <p>This filter is locked.</p>
          </div>

          <img alt="locked-filter" src="images/01-LOCKED.gif"></img>
        </div>

        <div className="filter-div">
          <div className="locked">
            <p>This filter is locked.</p>
          </div>

          <img alt="locked-filter" src="images/01-LOCKED.gif"></img>
        </div>

        <div className="filter-div">
          <div className="locked">
            <p>This filter is locked.</p>
          </div>

          <img alt="locked-filter" src="images/01-LOCKED.gif"></img>
        </div>

        <div className="filter-div">
          <div className="locked">
            <p>This filter is locked.</p>
          </div>

          <img alt="locked-filter" src="images/01-LOCKED.gif"></img>
        </div>

        <div className="filter-div">
          <div className="locked">
            <p>This filter is locked.</p>
          </div>

          <img alt="locked-filter" src="images/01-LOCKED.gif"></img>
        </div>
      </div>
    </>
  );
}

export default Library;
