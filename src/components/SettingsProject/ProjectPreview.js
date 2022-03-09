import "./ProjectPreview.css";
import Form from "../Form.js";

function ProjectPreview() {
  return (
    <div className="preview-container">
      <div className="SplitfilterImage"></div>
      <Form />
      <div className="LOADING">
        <img alt="refresh-button" src="images/01-LOADING.gif" />
      </div>
    </div>
  );
}
export default ProjectPreview;
