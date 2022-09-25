import React,{ Component } from 'react'
import Header from './Components/Nav/Header';
import Footer from './Components/Footer/Footer';
import '../node_modules/react-bootstrap/dist/react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Alert from './Components/Main/Alert/Alert';
import Section123 from './Components/Main/Section123/Section123';
import Section4 from './Components/Main/Section4/Section4';
import Section56 from './Components/Main/Section56/Section56';
// import Alert from 'react-bootstrap/Alert';


class App extends Component{
  render(){
  return (
    <div>

    <Header />
    <Alert />
    <Section123 />
    <Section4 />
    <Section56 />
    <Footer />
   

  
    </div>
  );
  }
}


export default App;
