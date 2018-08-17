import React from "react";
import { Container, Row, Col,Button,Link } from 'reactstrap';
import ContactHeader from './ContactHeader';
import NavLink from "./Navlink";
import '../styles/Contact.css';
import Footer from "./Footer";




 


const Contact= () => {
  return (


<div>





    < NavLink /> 
    <ContactHeader /> 
   
     
  


   <Container className="ContactStyle" >
    <Row>
   
    <Col>

<br/> 
<h1> If you would like to get in contact with me </h1> 

<br/> 

<br/> 

<br/> 

<br/> 

<br/> 

<br/> 


    <h1>Email </h1>


    <h1> Crhebeler@gmail.com </h1> 
    
    </Col>  
   
     
 
  
    </Row>
 


</Container> 

      <Footer />
      </div> 
  );
};

export default Contact;
