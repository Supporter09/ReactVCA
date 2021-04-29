import React, { useState } from 'react';
import '../assets/css/Avatar.css'

import { 
    Image,
    Container,
    Row,
    Col
} from 'react-bootstrap';

function Avatar (){
    return (
        <>
        <Container>
        <Row>
            <Col>
            <Image src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" rounded />
            </Col>
        </Row>
        </Container>
        </>
    )
}

export default Avatar