import React, { Component } from "react";
import Section4Link from "./Section4Link";
import "./Sec4.css"


class Section4 extends Component {
  render() {
    return (
      <div>
        <section className="fourth-heghlight-wrapper">
          <div className="container-fluid">
            <div className="row">
              <Section4Link
                leftRight="left-side-wrapper col-sm-12 col-md-6"
                lrcon="left-side-container"
                titleWrap="title-wraper"
                titleName="iPhone 11"
                desName="Just the right amount of everything."
                priceLi="From $18.70/mo. or $499 with trade‑in."
                sup="1" claName="links-wrapper"
                moreLink="/Learn More"
                moreName="Learn More"
                buyLink="/"
                buyName="Apply Now"
              />


              <Section4Link
                leftRight="right-side-wrapper col-sm-12 col-md-6"
                lrcon="right-side-container"
                titleWrap="title-wraper white"
                titleName="Get the latest CDC response to COVID-19."  claName="links-wrapper white"
                moreLink="/Watch the PSA"
                moreName="Watch the PSA"
                buyLink=""
                buyName=""
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Section4;
