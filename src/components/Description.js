import react from 'react';

import {
    ListGroup,
    Item
 } from 'react-bootstrap';

function Description (){
    return (
        <>
        <ListGroup>
        <ListGroup.Item><b>Name:</b> Mai Van Nhat Minh</ListGroup.Item>
        <ListGroup.Item><b>Born Date:</b> 18/07/2005</ListGroup.Item>
        <ListGroup.Item><b>Now work as:</b> Front End Dev</ListGroup.Item>
        <ListGroup.Item><b>Dream:</b> Become Full-stack Developer</ListGroup.Item>
        <ListGroup.Item><b>Tech stack:</b> HTML, CSS, JavaScript, Bootstrap, React.js, Express.js, MongoDB, Git</ListGroup.Item>
        </ListGroup>
        </>
    )
}

export default Description