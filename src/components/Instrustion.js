import React from "react";
import "./Instructions.css";

export default function Instruction() {
  return (
    <>
      <div className="instruction-box">
        <div className="filter-div1">
          <div className="locked1">
            <p>
              <p>Hey! Here is a short instruction!</p>
              We show you how to use the first PBN-Filter. So the first filter
              is called »Split-Filter«. The letters are split in the middel and
              get filled with different colors. You can edit the filter and in
              the end you get a smooth animation. We promise it's really easy!
            </p>
          </div>
          <img src="images/hey.gif"></img>
        </div>
        <div className="instruction-txt">
          <p>
            <p>Hey! Here is a short instruction!</p>
            We show you how to use the first PBN-Filter. So the first filter is
            called »Split-Filter«. The letters are split in the middel and get
            filled with different colors. You can edit the filter and in the end
            you get a smooth animation. We promise it's really easy!
          </p>
        </div>

        <div className="filter-div1">
          <div className="locked1">
            <p>
              To get a result you need to fill the form with the requiered
              information. You need to fill in the RGB values for each color you
              want. You can read the values in the box with the color pallette.
              Don't go to big with the format size to avoid bugs. When you're
              finished click the SENT button and wait!
            </p>
          </div>
          <img src="images/form.png"></img>
        </div>

        <div className="instruction-txt">
          <p>
            To get a result you need to fill the form with the requiered
            information. You need to fill in the RGB values for each color you
            want. You can read the values in the box with the color pallette.
            Don't go to big with the format size to avoid bugs. When you're
            finished click the SENT button and wait!
          </p>
        </div>

        <div className="filter-div1">
          <div className="locked1">
            <p>
              <p>Now you have an awesome animation!</p>
              You can download the GIF to your computer by clicking the DOWNLOAD
              button on the bottom of the site. Have fun creating your own
              content!
            </p>
          </div>
          <img src="images/heycutie.gif"></img>
        </div>
        <div className="instruction-txt">
          <p>
            <p>Now you have an awesome animation!</p>
            You can download the GIF to your computer by clicking the DOWNLOAD
            button on the bottom of the site. Have fun creating your own
            content!
          </p>
        </div>
      </div>
    </>
  );
}
