import React, {Component} from 'react'
import Navbar from 'react-bootstrap/Navbar';
import  Nav  from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
// import HeaderLink from './HeaderLink';
import AppleIcon from '@mui/icons-material/Apple';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import "./Header.css"

function Header() {
    return (
        <div>
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="order-lg-0 mx-auto order-1" href="#home"><AppleIcon/></Navbar.Brand>
        <Navbar.Toggle className="order-lg-1 order-0" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="flex-grow-1 justify-content-evenly">
            <Nav.Link   href="#Mac">Mac</Nav.Link>
            <Nav.Link  href="#iPad">iPad</Nav.Link>
            <Nav.Link  href="#iPhone">iPhone</Nav.Link>
            <Nav.Link href="#watch">Watch</Nav.Link>
            <Nav.Link href="#tv">TV</Nav.Link>
            <Nav.Link  href="#support">Support</Nav.Link>
            <Nav.Link  href="#Search"><SearchIcon /></Nav.Link>
            <Nav.Link href="#cart"><ShoppingBagOutlinedIcon /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </div>
    )


}



// class Header extends Component{
//     render(){
//   return (
//     <div >
//         	<div className="nav-wrapper fixed-top">
// 		<div className="container">
// 			<nav className="navbar navbar-toggleable-sm navbar-expand-md">
// 			    <button className="navbar-toggler navbar-toggler-right text-white" type="button" data-toggle="collapse" data-target=".navbar-collapse">
// 			        ☰
// 			    </button>
// 			    <a className="navbar-brand mx-auto text-white" href="#"><AppleIcon /></a>

// 			    <div className="navbar-collapse collapse">
// 			        <ul className="navbar-nav nav-justified w-100 nav-fill">

//                         <HeaderLink linkUrl = "/mac" linkName = "Mac"/>
//                         <HeaderLink linkUrl = "/iphone" linkName = "iPhone"/>
//                         <HeaderLink linkUrl = "/ipad" linkName = "iPad"/>
//                         <HeaderLink linkUrl = "/watch" linkName = "Watch"/>
//                         <HeaderLink linkUrl = "/tv" linkName = "TV"/>
//                         <HeaderLink linkUrl = "/music" linkName = "Music"/>
//                         <HeaderLink linkUrl = "/support" linkName = "Support"/>
//                         <HeaderLink linkUrl = "/support" linkName = "Support"/>
//                         {/* <HeaderLink linkUrl = "/search" linkName = "Mac"/>
//                         <HeaderLink linkUrl = "/cart" linkName = "Mac"/> */}
//                         <li class="nav-item" ><a class="nav-link js-scroll-trigger" href="/search/"><SearchIcon /></a></li>
// 						<li class="nav-item"><a  class="nav-link js-scroll-trigger" href="/cart/"><ShoppingBagOutlinedIcon /></a></li>
						
// 			        </ul>
// 			    </div>
// 			</nav>
// 		</div>
// 	</div>

//     </div>
//   )
// }
// }

export default Header

