import React, { useState } from 'react';

import ReactDOM from 'react-dom';

import CarouselComponent from "./components/CarouselComponent.js"
import Avatar from "./components/Avatar.js"
import Description from "./components/Description.js"
import Progress from "./components/Progress.js"
import './index.css';
import './assets/css/bootstrap.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

import { 
  Image,
  Container,
  Row,
  Col
} from 'react-bootstrap';
// function MyComponentOne (props){
//   return (
//     <div>
//       This is my component one {props.name}
//     </div>
//   )
// }
// function MyComponentTwo (){
//   return (
//     <div>
//       This is my component two
//       <MyComponentOne name="Gay"></MyComponentOne>
//     </div>
//   )
// }


function Index(){
  return(
      <>
      {/* <CarouselComponent/> */}
      <br/>
      <br/>
      <br/>
      <Container>
      <Row className="justify-content-md-center">
        <Col xs={4} md={4}>
        <Avatar/>
        </Col>
        <Col xs={6} md={6}>
        <Description/>
        </Col>
      </Row>
      <Row>
        <Col md={{span:8, offset:2}}>
          <Progress/>
        </Col>
      </Row>


      </Container>



      </>
  )
}


ReactDOM.render(
  <Index/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
