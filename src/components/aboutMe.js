import React from "react";
import "./aboutMe.css";
function aboutMe() {
  function resumeDownload() {
    window.open(
      "https://drive.google.com/file/d/1iArxdzKKLkXBSXmHRvNvPqsizm8e95pr/view",
      "_blank"
    );
  }
  return (
    <div className="aboutMe">
      <div className="details">
        <h1>HI, I AM Teena Upadhyay</h1>
        <h3>I am a student</h3>
        <p>
          I am a student of Computer Science . I have experience in building
          scalable , secure , and reliable web applications using various
          frameworks and technologies. I enjoy solving complex Problems and
          Learning new skills. I am always looking for new challanges and
          opportunities to grow up.
        </p>
        <button onClick={resumeDownload}>Download Resume</button>
      </div>
      <div className="programmerImg"></div>
    </div>
  );
}

export default aboutMe;
