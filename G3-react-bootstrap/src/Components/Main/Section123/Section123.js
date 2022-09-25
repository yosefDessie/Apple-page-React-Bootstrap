import React, { Component } from 'react'
import Sec123Link from './Sec123Link'
import "./Sec123.css"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

 class Section123 extends Component {
  render() {
    return (
      <div>
		  {/* section 1 starts  */}
          <Sec123Link sectionClassName="first-hightlight-wrapper"
		container= "container"
        alertClassName= "new-alert"
		New= "New"
		titleClassName = "title-wraper bold black"
		titleName = "iPad Pro"
		linksClassName= "links-wrapper"
		learnUrl = "#" 
		linkLearn = "Learn more"
        buyUrl = "#" 
        linkBuy = "Order"
		captionClassName = "ipod-caption row"
		rightCaptionClass= "col-sm-12 col-md-6 text-md-right" 
        ipodPrice= "iPad Pro available starting 3.25"
		leftCaptionClass = "col-sm-12 col-md-6 text-md-left" 
        ipodDate = "Magic Keyboard coming in May"
		/>
		{/* section 1 ends  */}

{/* section 2 starts  */}

<Sec123Link sectionClassName="second-hightlight-wrapper"
		container= "container"
        alertClassName= "new-alert"
		New= "New"
		titleClassName = "title-wraper bold black"
		titleName = "MacBook Air"
        discriptionClassName = "description-wrapper black"
        discriprion = "Twice the speed. Twice the storage."
        priceClassName = "price-wrapper grey"
        price = "From $999."
		linksClassName= "links-wrapper"
		learnUrl = "#" 
        linkLearn = "Learn more"
        buyUrl = "#" 
        linkBuy = "Buy"
	/>
{/* section 2 ends  */}

{/* section 3 starts  */}
<Sec123Link sectionClassName="third-hightlight-wrapper"
		container= "container"
		titleClassName = "title-wraper bold black"
		titleName = "iPhone 11 Pro"
        discriptionClassName = "description-wrapper black"
        discriprion = "Pro cameras. Pro display. Pro performance."
        priceClassName = "price-wrapper"
        price = "From $24.95/mo. or $599 with trade‑in."
		linksClassName= "links-wrapper"
		learnUrl = "#" 
        linkLearn = "Learn more"
        buyUrl = "#" 
        linkBuy = "Buy"
	/>
	{/* section 3 ends  */}

      </div>
    )
  }
}

export default Section123
