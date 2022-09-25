import React, {Component} from 'react'
import FooterLink from './FooterLink'
import icon16 from '../../commonResource/images/icons/16.png'
import "./Footer.css"



class Footer  extends Component {
	render() {
    return (
    <div>	<footer class="footer-wrapper">
	<div class="container"> 
		<div class="upper-text-container">
			<p>1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro promotional pricing is after trade‑in of iPhone 8 Plus and iPhone X in good condition. Additional trade‑in values require purchase of a new iPhone, subject to availability and limits. Must be at least 18. Apple or its trade-in partners reserve the right to refuse or limit any Trade In transaction for any reason. In‑store trade‑in requires presentation of a valid, government-issued photo ID (local law may require saving this information). Sales tax may be assessed on full value of new iPhone. Additional terms from Apple or Apple’s trade-in partners may apply. Monthly pricing: Available to qualified customers and requires 0% APR, 24-month installment loan with Citizens One or Apple Card Monthly Installments and iPhone activation with AT&T, Sprint, T-Mobile, or Verizon. Taxes and shipping not included. Additional Apple Card Monthly Installments terms are in the <a href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf" target="_blank"> Customer Agreement</a>. Additional iPhone Payments terms are <a href="https://www.apple.com/legal/sales-support/iphoneinstallments_us/"> here</a>.</p>
			<p>2. Subscription required.<br /><br/>
			Magic Keyboard sold separately.<br/><br/>
			Apple TV+ is $4.99/month after free trial. One subscription per Family Sharing group. Offer good for 3 months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other <a href="https://www.apple.com/promo/">terms </a> apply.</p>
		</div>
		<div class="footer-links-wrapper row"> 
			<div class="links-wrapper-1 col-sm-12 col-md">
				<h3>Shop and Learn</h3>
				<ul>
				<FooterLink linkUrl="#" linkName="Mac"/>
				<FooterLink linkUrl="#" linkName="iPad"/>
				<FooterLink linkUrl="#" linkName="iPhone"/>
				<FooterLink linkUrl="#" linkName="Watch"/>
				<FooterLink linkUrl="#" linkName="TV"/>
				<FooterLink linkUrl="#" linkName="Music"/>
				<FooterLink linkUrl="#" linkName="AirPods"/>
				<FooterLink linkUrl="#" linkName="HomePod"/>
				<FooterLink linkUrl="#" linkName="iPod touch"/> 
				<FooterLink linkUrl="#" linkName="Accessories"/>
				<FooterLink linkUrl="#" linkName="Gift Cards"/>
				</ul>
			</div> 
			<div class="links-wrapper-2 col-sm-12 col-md">
				<h3>Services</h3>
				<ul>
				<FooterLink linkUrl="#" linkName="Apple Music"/>
				<FooterLink linkUrl="#" linkName="Apple News+"/>
				<FooterLink linkUrl="#" linkName="Apple TV+"/>
				<FooterLink linkUrl="#" linkName="Apple Arcade"/>
				<FooterLink linkUrl="#" linkName="Apple Card"/>
				<FooterLink linkUrl="#" linkName="iCloud"/>
				</ul>
				<h3>Account</h3>
				<ul>
				<FooterLink linkUrl="#" linkName="Manage Your Apple ID"/>
				<FooterLink linkUrl="#" linkName="Apple Store Account"/>
				<FooterLink linkUrl="#" linkName="iCloud.com"/>
				</ul>					
			</div> 
			<div class="links-wrapper-3 col-sm-12 col-md">
				<h3>Apple Store</h3>
				<ul>
				<FooterLink linkUrl="#" linkName="Find a Store"/>
				<FooterLink linkUrl="#" linkName="Genius Bar"/>
				<FooterLink linkUrl="#" linkName="Today at Apple"/>
				<FooterLink linkUrl="#" linkName="Apple Camp"/>
				<FooterLink linkUrl="#" linkName="Field Trip"/>
				<FooterLink linkUrl="#" linkName="Apple Store App"/>
				<FooterLink linkUrl="#" linkName="Refurbished and Clearance"/>
				<FooterLink linkUrl="#" linkName="Financing"/>
				<FooterLink linkUrl="#" linkName="Apple Trade In"/>
				<FooterLink linkUrl="#" linkName="Order Status"/>
				<FooterLink linkUrl="#" linkName="Shopping Help"/>
				</ul>
			</div>  
			<div class="links-wrapper-4 col-sm-12 col-md">
				<h3>For Business</h3>
				<ul>
				<FooterLink linkUrl="#" linkName="Apple and Business"/>
				<FooterLink linkUrl="#" linkName="Shop for Business"/>
				</ul>		
				<h3>For Education</h3>
				<ul>
				<FooterLink linkUrl="#" linkName="Apple and Education"/>
				<FooterLink linkUrl="#" linkName="Shop for College"/>
				</ul>
				<h3>For Healthcare</h3>
				<ul>
				<FooterLink linkUrl="#" linkName="Manage Your Apple ID"/>
				<FooterLink linkUrl="#" linkName="Apple Store Account"/>
				<FooterLink linkUrl="#" linkName="iCloud.com"/>
				</ul>	
				<h3>For Government</h3>
				<ul>
				<FooterLink linkUrl="#" linkName="Apple and Education"/>
				<FooterLink linkUrl="#" linkName="Shop for College"/>
				</ul>
			</div> 
			<div class="links-wrapper-5 col-sm-12 col-md">
				<h3>Apple Values</h3>
				<ul>
				<FooterLink linkUrl="#" linkName="Find a Store"/>
				<FooterLink linkUrl="#" linkName="Genius Bar"/>
				<FooterLink linkUrl="#" linkName="Today at Apple"/>
				<FooterLink linkUrl="#" linkName="Apple Camp"/>
				<FooterLink linkUrl="#" linkName="Field Trip"/>
				<FooterLink linkUrl="#" linkName="Apple Store App"/>
				</ul>
				<h3>About Apple</h3>
				<ul>
				<FooterLink linkUrl="#" linkName="Find a Store"/>
				<FooterLink linkUrl="#" linkName="Genius Bar"/>
				<FooterLink linkUrl="#" linkName="Today at Apple"/>
				<FooterLink linkUrl="#" linkName="Apple Camp"/>
				<FooterLink linkUrl="#" linkName="Field Trip"/>
				<FooterLink linkUrl="#" linkName="Apple Store App"/>
				</ul>						
			</div> 
		</div>
		<div class="my-apple-wrapper"> 
			More ways to shop: <a href="#">Find an Apple Store</a> or <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
		</div>
		<div class="copyright-wrapper row">
			<div class="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
				Copyright &copy; 2020 Apple Inc. All rights reserved.
			</div>
			<div class="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2">
				<ul>
				                <FooterLink linkUrl="#" linkName="Privacy Policy"/>
								<FooterLink linkUrl="#" linkName="Terms of Use"/>
	            				<FooterLink linkUrl="#" linkName="Sales and Refunds"/>
								<FooterLink linkUrl="#" linkName="Legal"/>
								<FooterLink linkUrl="#" linkName="Site Map"/>
				</ul>
			</div>
			<div class="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
				<div class="flag-wrapper"><img src={icon16} /></div> <div class="footer-country-name">United States</div> 
			</div>
		</div>
	</div>
</footer> </div>
  )
}
}
export default Footer;