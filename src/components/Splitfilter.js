import React, { useState, useEffect } from "react";
import "./Splitfilter.css";

function Splitfilter() {
  const [block, setBlock] = useState([{}]);

  useEffect(() => {
    fetch("/test_3")
      .then((res) => res.json())
      .then((data) => {
        setBlock(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <div className="split-box">
        <div className="splitfilter1">
          {typeof block.image_string === "undefined" ? (
            <p>Loading...</p>
          ) : (
            <img
              src={`data:image/gif;base64,${block.image_string}`}
              alt="Loading"
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Splitfilter;
