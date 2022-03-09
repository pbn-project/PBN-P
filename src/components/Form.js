import React, { useEffect, useState } from "react";
import "./Form.css";
import SketchExample from "./SettingsProject/ColorWheel";
import { saveAs } from "file-saver";
import axios from "axios";
import Splitfilter from "./Splitfilter";

const Form = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };

  const [block, setBlock] = useState([{}]);
  useEffect(() => {
    fetch("/test_3")
      .then((res) => res.json())
      .then((data) => {
        setBlock(data);
      });
  }, []);

  const downloadImage = () => {
    saveAs(`data:image/gif;base64,${block.image_string}`); // Put your image url here.
  };

  const [visible, setVisible] = React.useState(false);
  const [visibleInfo, setVisibleInfo] = React.useState(false);
  const handleToggleInfo = () => {
    setVisibleInfo(!visibleInfo);
  };
  const closeInfo = () => {
    setVisibleInfo(false);
  };

  const [title, setTitle] = useState("Hey");
  const [frames, setFrames] = useState("25");
  const [formatX, setFormatX] = useState("800");
  const [formatY, setFormatY] = useState("600");
  const [fontSize, setFontSize] = useState("200");
  const [splitOptionYes, setSplitOptionYes] = useState("Yes");
  const [splitDistance, setSplitDistance] = useState("10");

  const [colorBGR, setColorBGR] = useState("241");
  const [colorBGG, setColorBGG] = useState("241");
  const [colorBGB, setColorBGB] = useState("241");

  const [color1R, setColor1R] = useState("188");
  const [color1G, setColor1G] = useState("238");
  const [color1B, setColor1B] = useState("52");

  const [color2R, setColor2R] = useState("168");
  const [color2G, setColor2G] = useState("191");
  const [color2B, setColor2B] = useState("171");

  const [color3R, setColor3R] = useState("61");
  const [color3G, setColor3G] = useState("52");
  const [color3B, setColor3B] = useState("228");

  const [color4R, setColor4R] = useState("252");
  const [color4G, setColor4G] = useState("113");
  const [color4B, setColor4B] = useState("214");

  const handleChange = (event) => {
    setSplitOptionYes(event.target.value);
  };

  async function insertData() {
    const response = await axios.post("/test_0", {
      title,
      fontSize,
      frames,
      formatX,
      formatY,
      splitOptionYes,
      splitDistance,
      colorBGR,
      colorBGG,
      colorBGB,
      color1R,
      color1G,
      color1B,
      color2R,
      color2G,
      color2B,
      color3R,
      color3G,
      color3B,
      color4R,
      color4G,
      color4B,
    });
    console.log(response);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    insertData();
    setTitle("");
    setFontSize("");
  };
  function refreshPage() {
    window.location.reload(false);
  }
  const [style, setStyle] = useState({ display: "none" });

  return (
    <div>
      <div className="menu-refresh-loading">
        <button className="form-button" onClick={handleToggle}>
          <p>Settings</p>
          <img alt="locked filter" src="images/02-MENU.gif" />
        </button>
        <div
          className="refresh-loading"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <button
            className="open-img-1"
            onClick={() => {
              closeMenu();
              refreshPage();
              setVisible(true);
            }}
            style={{ float: "right" }}
          >
            <img alt="refresh-button" src="images/01-refresh.gif" />
            <p>Refresh</p>
          </button>

          <button
            className="open-img"
            onClick={() => {
              closeMenu();

              setVisible(true);
            }}
          >
            <p>Reload</p>
            <img alt="loading-button" src="images/01-loading.gif" />
          </button>

          <button
            className="open-img"
            onClick={() => {
              setVisibleInfo(true);
              handleToggleInfo();
            }}
          >
            <p>Info</p>
            <img alt="loading-button" src="/images/02-Info.gif" />
          </button>
        </div>
      </div>
      <div
        className="refresh-loading"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        {visibleInfo && (
          <div className="info-text">
            <p>
              Please click the REFRESH BUTTON and the RELOAD BUTTON multible
              times if your animation doesn't show up.
            </p>
          </div>
        )}
      </div>

      <nav className="navBar">
        <form
          onSubmit={handleSubmit}
          className={`form-box ${navbarOpen ? " showMenu" : ""}`}
        >
          <label htmlFor="title" className="form-label">
            Text
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Write Text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label htmlFor="body" className="form-label">
            Format
          </label>
          <div className="double-box">
            <input
              className="form-control"
              placeholder="1400px"
              rows="6"
              value={formatX}
              onChange={(e) => setFormatX(e.target.value)}
              required
            ></input>
            <input
              className="form-control"
              placeholder="1000px"
              rows="6"
              value={formatY}
              onChange={(e) => setFormatY(e.target.value)}
              required
            ></input>
          </div>
          <label className="form-label">Frames</label>
          <input
            type="text"
            className="form-control"
            placeholder="25"
            value={frames}
            onChange={(e) => setFrames(e.target.value)}
            required
          />
          <label className="form-label">Font Size</label>
          <input
            type="text"
            className="form-control"
            placeholder="250pt"
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
            required
          />
          <label className="form-label">Should they split?</label>

          <div className="split-option">
            <select
              value={splitOptionYes}
              onChange={handleChange}
              className="split"
            >
              <option className="form-control" placeholder="Yes" value="Yes">
                Yes
              </option>
              <option className="form-control-no" placeholder="No" value="">
                No
              </option>
            </select>

            {/*  <input
              type="text"
              className="form-control"
              placeholder="Yes"
              value={splitOptionYes}
              onChange={(e) => setSplitOptionYes(e.target.value)}
            />
            <input
              type="text"
              className="form-control-no"
              placeholder="No"
              value={splitOptionNo}
              onChange={(e) => setSplitOptionNo(e.target.value)}
              onMouseEnter={(e) => {
                setStyle({ display: "block" });
              }}
              onMouseLeave={(e) => {
                setStyle({ display: "none" });
              }}
            /> */}
          </div>

          {/*   <div className="split-option-mini">
            <input
              type="text"
              className="form-control"
              placeholder="Yes"
              value={splitOptionYes}
              onChange={(e) => setSplitOptionYes(e.target.value)}
            />
            <input
              type="text"
              className="form-control-no"
              placeholder="No"
              value={splitOptionNo}
              onChange={(e) => setSplitOptionNo(e.target.value)}
            />
          </div> */}

          <label className="form-label">Split distance</label>
          <input
            type="text"
            className="form-control"
            placeholder="40"
            value={splitDistance}
            onChange={(e) => setSplitDistance(e.target.value)}
            required
          />

          <label className="form-label-rgb">Read RGB </label>
          <div className="color">
            <SketchExample />
          </div>

          <label className="form-label-rgb">Background Color</label>
          <div className="color-rgb">
            <input
              type="text"
              className="form-control"
              placeholder="R"
              value={colorBGR}
              onChange={(e) => setColorBGR(e.target.value)}
              required
            />
            <input
              type="text"
              className="form-control"
              placeholder="G"
              value={colorBGG}
              onChange={(e) => setColorBGG(e.target.value)}
              required
            />
            <input
              type="text"
              className="form-control"
              placeholder="B"
              value={colorBGB}
              onChange={(e) => setColorBGB(e.target.value)}
              required
            />
          </div>

          <label className="form-label-rgb">Color ONE</label>
          <div className="color-rgb">
            <input
              type="text"
              className="form-control"
              placeholder="R"
              value={color1R}
              onChange={(e) => setColor1R(e.target.value)}
              required
            />
            <input
              type="text"
              className="form-control"
              placeholder="G"
              value={color1G}
              onChange={(e) => setColor1G(e.target.value)}
              required
            />
            <input
              type="text"
              className="form-control"
              placeholder="B"
              value={color1B}
              onChange={(e) => setColor1B(e.target.value)}
              required
            />
          </div>
          <label className="form-label-rgb">Color Two</label>
          <div className="color-rgb">
            <input
              type="text"
              className="form-control"
              placeholder="R"
              value={color2R}
              onChange={(e) => setColor2R(e.target.value)}
              required
            />
            <input
              type="text"
              className="form-control"
              placeholder="G"
              value={color2G}
              onChange={(e) => setColor2G(e.target.value)}
              required
            />
            <input
              type="text"
              className="form-control"
              placeholder="B"
              value={color2B}
              onChange={(e) => setColor2B(e.target.value)}
              required
            />
          </div>

          <label className="form-label-rgb">Color Two</label>
          <div className="color-rgb">
            <input
              type="text"
              className="form-control"
              placeholder="R"
              value={color3R}
              onChange={(e) => setColor3R(e.target.value)}
              required
            />
            <input
              type="text"
              className="form-control"
              placeholder="G"
              value={color3G}
              onChange={(e) => setColor3G(e.target.value)}
              required
            />
            <input
              type="text"
              className="form-control"
              placeholder="B"
              value={color3B}
              onChange={(e) => setColor3B(e.target.value)}
              required
            />
          </div>

          <label className="form-label-rgb">Color Four</label>
          <div className="color-rgb">
            <input
              type="text"
              className="form-control"
              placeholder="R"
              value={color4R}
              onChange={(e) => setColor4R(e.target.value)}
              required
            />
            <input
              type="text"
              className="form-control"
              placeholder="G"
              value={color4G}
              onChange={(e) => setColor4G(e.target.value)}
              required
            />
            <input
              type="text"
              className="form-control"
              placeholder="B"
              value={color4B}
              onChange={(e) => setColor4B(e.target.value)}
              required
            />
          </div>
          <button
            className="publish-button"
            onClick={() => {
              closeMenu();
              setVisible(true);
            }}
          >
            Sent Data
          </button>
          <button className="dowload-button" onClick={downloadImage}>
            Download
          </button>
        </form>
      </nav>
      {visible && (
        <div className="splitfilter">
          <Splitfilter />
        </div>
      )}
    </div>
  );
};

export default Form;
