import React, { Component } from "react";
import portfolioInfo from "../../portfolio.json";
import Cards from "../Cards";
import Skills from "../Skills";
class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolioInfo,
    };
  }

  render() {
    return (
      <>
        <div className="container port" id="portfolio">
          <div className="row">
            {this.state.portfolioInfo.map((portfolioInfo) => (
              <Cards
                key={portfolioInfo.id}
                cardImage={portfolioInfo.cardImage}
                cardTitle={portfolioInfo.cardTitle}
                cardText={portfolioInfo.cardText}
                use={portfolioInfo.use}
                use1={portfolioInfo.use1}
                use2={portfolioInfo.use2}
                use3={portfolioInfo.use3}
                use4={portfolioInfo.use4}
                liveLink={portfolioInfo.liveLink}
                code={portfolioInfo.code}
              />
            ))}
          </div>
        </div>
        <div className="skills">
          <Skills />
        </div>
      </>
    );
  }
}

export default Portfolio;
