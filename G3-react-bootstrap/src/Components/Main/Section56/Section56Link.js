import React,{Component} from "react";

class Section56Link extends Component{
    render(){
        return(
            <div className={this.props.leftright}>
      <div className={this.props.lrCon}>
        <div className="top-logo-wrapper">
          <div className="logo-wrapper">
            <img src={this.props.img} />
          </div>
        </div>
        <div className={this.props.anoLog}>
          <img src={this.props.anoImag} />
        </div>
        <div className={this.props.play}>
              <a href={this.props.playLink}>{this.props.playDiscription}</a>
            </div>
        <div className={this.props.descr}>
          {this.props.descName}
        </div>
        <div className="links-wrapper">
          <ul>
            <li>
              <a href={this.props.moreLink}>{this.props.moreName}</a>
            </li>
            <li>
              <a href={this.props.buyLink}>{this.props.buyName}</a>
            </li>
          </ul>
        </div>

        {/* <div className="watch-more-wrapper">
          <a href="#">Watch now on the Apple TV App</a>
        </div> */}
      </div>
    </div>
        )
    }
}
export default Section56Link