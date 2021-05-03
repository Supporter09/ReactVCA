import React from 'react';
// import getRandomColor from "../assets/utils.js"

function RandomColorRec(props){
    // const [color, setColor] = useState(getRandomColor());
    function handleOnclick(){
        if(props.color === props.correctColor){
            // console.log('props data',props.color);
            // console.log('props data',props.correctColor);
            props.handler();
        }
        // props.handler();
    }
    return(
        <>
        {/* <button onClick={()=>{setColor(getRandomColor())}}>Click to change color</button> */}
        <div id="rectangle" style={{backgroundColor:props.color, width:"100px",height:"100px"}}  onClick={handleOnclick}>

        </div>
        </>
    )
}

export default RandomColorRec