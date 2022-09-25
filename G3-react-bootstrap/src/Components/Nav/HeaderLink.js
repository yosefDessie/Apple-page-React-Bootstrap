import React, { Component } from 'react'

class HeaderLink extends Component {
  render() {
    return (
      <div>
          <li className="nav-item"><a className="nav-link js-scroll-trigger" href={this.props.linkUrl}>{this.props.linkName}</a></li>
						
	
      </div>
    )
  }
}

export default HeaderLink

