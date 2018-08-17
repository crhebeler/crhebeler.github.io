import React from "react";
import Chris from "../images/profilepic.jpg";
import { Container, Row, Col } from 'reactstrap';
import '../styles/Center.css';



const Center = () => (
  <div>
  
          <Container>
    <Row>
    <section className="probackround">
      <Col ><img className="chris" src={Chris} alt="Christopher"  />
    </Col> 
    </section> 
     
 
    </Row>
    <Row>
 
 <Col>

 <h3>Front End Web /React.Js / M.E.R.N Stack /familiar with full stack web development. Excellent communication and customer service skills. Adaptable to change. Enthusiastic about learning new and emerging technologies and frameworks. Ability to work independently to problem solve; critical thinking. Able to troubleshoot using online resources to solve unique or new problems. Able to work in a fast-paced environment and collaborate with a team.</h3>
 </Col>

</Row>

</Container> 

  </div>
)
export default Center;
