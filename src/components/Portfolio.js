import React from "react";
import HeaderPort from './HeaderPort';
import NavLink from "./Navlink";
import Footer from "./Footer";
import '../styles/Port.css';
import { Container, Row, Col,Button,Link } from 'reactstrap';
//import '../styles/Center.css';
import FlightVue from "../images/flightvue.jpg";
import ParkFinder from "../images/Parkfinder.jpg";
import Desktop1 from "../images/Desktop1.jpg";



const Porfolio = (props) => {

  

  return (


<div> 
        < NavLink /> 
        <HeaderPort /> 


<Container className="PortContainer">




    <Row>
    <section className="LocationStyle">
    <h1> 
 Location Trends App 
  </h1> 
  <p> M.E.R.N Stack App </p> 
  <a href="https://locationtrendsapp.com/" ><Button  color="primary" size="lg">Click Here to View Live Location Trends App</Button></a>

      <Col ><img className="LocationTrends" src={Desktop1} alt="Location Trends Photo"  />
<a href="https://github.com/crhebeler/LocationTrendsAPP/" ><Button  color="primary" size="lg">Click Here to Check out the Code</Button></a>
    </Col> 
  <br/> 
    </section> 
     
 
    </Row>


        <Row>
   <section className="ParkFinderStyle"> 
<h1> ParkFinder </h1> 
<p> Html,Css,Javascript,Json,Various Api's</p> 
   <a href="https://crhebeler.github.io/ParkFinderapp/" ><Button  color="primary" size="lg">Click to View live App</Button></a>
     
      <Col ><img className="ParkFinder" src={ParkFinder} alt="Park Finger Photo"  />
      
      <a href="https://github.com/crhebeler/ParkFinderapp" ><Button  color="primary" size="lg">Check Out the Code Here</Button></a>
    </Col> 
<br/> 
    </section> 
     
 
    </Row>


    

          <Row>
    <section className="FlightVueStyle"> 
    <h1> FlightVue </h1> 

     <p> Javascript,Node and Express Web Server, MySQL,Handle Bars </p> 
    <a href="https://frozen-ocean-73432.herokuapp.com/" ><Button  color="primary" size="lg">Click to View Site</Button></a>
      <Col ><img className="FlightVue" src={FlightVue} alt="Flight Vue Photo"  />
      <a href="https://github.com/crhebeler/FlightVueApp" ><Button  color="primary" size="lg">Check Out the Code Here</Button></a>
    </Col> 
   

  <br/> 
  <br/> 
    </section> 
  
    </Row>
  

</Container> 


<Footer />
</div> 
  
);
};

export default Porfolio;
