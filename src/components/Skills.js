import React, { useState } from "react";

export default function Skills() {
  const [showHTMLLabel, setShowHTMLLabel] = useState(false);
  const [showJSLabel, setShowJSLabel] = useState(false);
  const [showCSSLabel, setShowCSSLabel] = useState(false);
  const [showReactLabel, setShowReactLabel] = useState(false);
  const [showNPMLabel, setShowNPMLabel] = useState(false);
  const [showNodeLabel, setShowNodeLabel] = useState(false);
  return (
    <>
      {/* will just show on a small screen */}
      <p className="smallScreen">
        <i className="fab fa-html5 fa-2x"></i>{" "}
        <i className="fab fa-js-square fa-2x"></i>{" "}
        <i className="fab fa-css3-alt fa-2x"></i>{" "}
        <i className="fab fa-react fa-2x"></i>{" "}
        <i className="fab fa-npm fa-2x"></i>{" "}
        <i className="fab fa-node fa-2x"></i>{" "}
      </p>
      <div className="languages">
        <i
          className={"fab fa-html5 fa-3x lng"}
          onMouseEnter={() => setShowHTMLLabel(true)}
          onMouseLeave={() => setShowHTMLLabel(false)}
        ></i>
        {showHTMLLabel && <span className="display">HTML</span>}
        <i
          className="fab fa-js-square fa-3x lng"
          onMouseEnter={() => setShowJSLabel(true)}
          onMouseLeave={() => setShowJSLabel(false)}
        ></i>
        {showJSLabel && <span className="display">JavaScript</span>}
        <i
          className="fab fa-css3-alt fa-3x lng"
          onMouseEnter={() => setShowCSSLabel(true)}
          onMouseLeave={() => setShowCSSLabel(false)}
        ></i>
        {showCSSLabel && <span className="display">CSS</span>}
        <i
          className="fab fa-react fa-3x lng"
          onMouseEnter={() => setShowReactLabel(true)}
          onMouseLeave={() => setShowReactLabel(false)}
        ></i>
        {showReactLabel && <span className="display">React</span>}
        <i
          className="fab fa-npm fa-3x lng"
          onMouseEnter={() => setShowNPMLabel(true)}
          onMouseLeave={() => setShowNPMLabel(false)}
        ></i>
        {showNPMLabel && <span className="display">NPM</span>}
        <i
          className="fab fa-node fa-3x lng"
          onMouseEnter={() => setShowNodeLabel(true)}
          onMouseLeave={() => setShowNodeLabel(false)}
        ></i>
        {showNodeLabel && <span className="display">Node</span>}
      </div>
    </>
  );
}
