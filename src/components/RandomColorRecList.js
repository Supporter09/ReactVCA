import React, { useState } from 'react';
import RandomColorRec from './RandomColorRec';
// import getRandomColor from "../assets/utils.js"

import {
    Row, 
    Col
  } from 'react-bootstrap';
  

function getRandomColor(){
    const r= Math.round(Math.random() * 255);
    const g= Math.round(Math.random() * 255);
    const b= Math.round(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}
function randomColorArr(amount){
    var colorArr= [];
    for (var i = 0; i <amount;i++){
        colorArr.push(getRandomColor());
    }
    return colorArr
}
function randomNum(amount){
    var random_num = Math.round(Math.random() * (amount-1));
    return random_num
}

function RandomColorRecList(props){
    
    var [colorArray,setColorArr] = useState(randomColorArr(props.amount));
    var [correctColor,setCorrectColor] = useState(colorArray[randomNum(props.amount)]); 
    // console.log("correct color outside: ",correctColor)
    function handleOnClick(){  
        // var randomRec =  Math.round(Math.random() * props.amount);
        // console.log("run");
        let random_arr = randomColorArr(props.amount);
        setColorArr(random_arr);
        // console.log(colorArray);
        // var ran_num = Math.round(Math.random() * 5)
        // console.log("color array in method :",random_arr)
        setCorrectColor(random_arr[randomNum(5)]);
    }
    
    
    
    return(
        <>
        <Row>
            <Col style={{display:"flex",justifyContent: "center"}}>
                <h5 style={{color:"#2a9d8f"}}>CORRECT COLOR: {correctColor}</h5>
            </Col>
        </Row>
        
        <Row>
            <Col>
                <RandomColorRec color={colorArray[0]} key={0} handler={handleOnClick} correctColor = {correctColor} />
            </Col>
            <Col>
                <RandomColorRec color={colorArray[1]} key={1} handler={handleOnClick} correctColor = {correctColor} />
            </Col>
            <Col>
                <RandomColorRec color={colorArray[2]} key={2} handler={handleOnClick} correctColor = {correctColor} />
            </Col>
            <Col>
                <RandomColorRec color={colorArray[3]} key={3} handler={handleOnClick} correctColor = {correctColor} />
            </Col>
            <Col>
                <RandomColorRec color={colorArray[4]} key={4} handler={handleOnClick} correctColor = {correctColor} />
            </Col>       
        </Row>
        
        </>
    )
}

export default RandomColorRecList