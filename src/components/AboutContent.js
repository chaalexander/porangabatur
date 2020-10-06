import React from "react";
import profilePic from "../assets/images/profile.png";

function AboutContent() {
  return (
    <>
      <div className="container" id="about">
        <div className="media w3-black">
          <img src={profilePic} className="img" alt="Profile" />
          <div className="media-body">
            <p className="aboutmeBig">
              Brazilian full Stack Web Developer with a background in sales,
              fashion and customer service providing strong problem-solving
              skills with a keen eye for aesthetics and presentation. An
              excellent communicator and collaborator who works well in
              team-based projects and independently with very strong
              interpersonal skills. Effectively leverage interest in solving
              complex problems by contributing as a part of a fast paced,
              quality-driven team.
            </p>
            <p className="aboutmeSml">
              Brazilian full Stack Web Developer with a background in sales,
              fashion and customer service providing strong problem-solving
              skills with a keen eye for aesthetics and presentation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutContent;
