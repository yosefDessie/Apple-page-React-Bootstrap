import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

 class Sec123Link extends Component {
  render() {
    return (
      <div>
          <section className={this.props.sectionClassName}>
		<div className={this.props.container}>

			<div className={this.props.alertClassName}>
				{this.props.New}
			</div>

			<h1 className={this.props.titleClassName}>
			{this.props.titleName}
			</h1> 
            
            <h4 class={this.props.discriptionClassName}>
				{this.props.discriprion}
			</h4>

			<div class={this.props.priceClassName}>
				{this.props.price}
			</div>

			<div className={this.props.linksClassName}>
				<ul>
					<li><a href={this.props.learnUrl}>{this.props.linkLearn}</a></li>
					
					<li><a href={this.props.buyUrl}>{this.props.linkBuy}</a></li>
				</ul> 
			</div>

			<div className={this.props.captionClassName}>
				<Row> <div className={this.props.rightCaptionClass}>{this.props.ipadPrice}</div>
				<div className={this.props.leftCaptionClass}>{this.props.ipadDate}</div>
                </Row>
			</div>
		</div>
	</section>

      </div>
    )
  }
}

export default  Sec123Link
