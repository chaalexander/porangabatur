import React, { useState } from "react";
import github from "../assets/images/icons/github.png";
import linkedin from "../assets/images/icons/linkedin.png";
import gmail from "../assets/images/icons/gmail.png";
import resume from "../assets/resume.pdf";
import resumeIcon from "../assets/images/icons/resume.png";

export default function Contact() {
  const [showGitHubLabel, setShowGitHubLabel] = useState(false);
  const [showLinkedinLabel, setShowLinkedinLabel] = useState(false);
  const [showGmailLabel, setShowGmailLabel] = useState(false);
  const [showResumeLabel, setShowResumeLabel] = useState(false);

  return (
    <div className="container" id="contact">
      <h1 className="me"> Contact</h1>
      <ul className="list-unstyled">
        <a
          href="https://github.com/chaalexander "
          target="_blank"
          rel="noopener noreferrer"
          className={showGitHubLabel && "hoverIcon"}
          onMouseEnter={() => setShowGitHubLabel(true)}
          onMouseLeave={() => setShowGitHubLabel(false)}
        >
          <img src={github} className="icon" alt="github" />
          {showGitHubLabel && <span>Github</span>}
        </a>
        <a
          href="https://www.linkedin.com/in/cha-alexander"
          target="_blank"
          rel="noopener noreferrer"
          className={showLinkedinLabel && "hoverIcon"}
          onMouseEnter={() => setShowLinkedinLabel(true)}
          onMouseLeave={() => setShowLinkedinLabel(false)}
        >
          <img src={linkedin} className="icon" alt="linkedin" />
          {showLinkedinLabel && <span>Linkedin</span>}
        </a>
        <a
          href="mailto:charlennep@gmail.com"
          className={showGmailLabel && "hoverIcon"}
          onMouseEnter={() => setShowGmailLabel(true)}
          onMouseLeave={() => setShowGmailLabel(false)}
        >
          <img src={gmail} className="icon" alt="gmail" />
          {showGmailLabel && <span>Gmail</span>}
        </a>
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className={showResumeLabel && "hoverIcon"}
          onMouseEnter={() => setShowResumeLabel(true)}
          onMouseLeave={() => setShowResumeLabel(false)}
        >
          <img className="icon" alt="resume" src={resumeIcon} />
          {showResumeLabel && <span>Resume</span>}
        </a>
      </ul>
    </div>
  );
}
