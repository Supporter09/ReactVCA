import React, { useState } from 'react';

import ReactDOM from 'react-dom';


import './index.css';
import './assets/css/bootstrap.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import getRandomColor from "./assets/utils.js";

//IMPORT COMPONENT

import CarouselComponent from "./components/CarouselComponent.js";
import Avatar from "./components/Avatar.js";
import Description from "./components/Description.js";
import Progress from "./components/Progress.js";
import RandomColorRec from "./components/RandomColorRec.js";
import RandomColorRecList from "./components/RandomColorRecList.js";

import { 
  Image,
  Container,
  Row,
  Col
} from 'react-bootstrap';


function Index(){
  var [color,setColor] = useState() 
  return(
      <>
      {/* <Container>
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
      </Container> */}
      <Container>
        <Row>
          <Col style={{display:"flex",justifyContent: "center"}}>
            <h2>Hey, color guessing app!</h2>

          </Col>
        </Row>
        <Row>
          <RandomColorRecList amount={5}/>
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
