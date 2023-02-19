import React, { createElement } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import parse from 'html-react-parser';

function Detail(content) {
    
    let post = parse(content.text);
    //console.log(post);
    return (
        <Container>
            <Row>
                <Col sm={8}><strong>{content.title}</strong></Col>
                <Col style={{ textAlign: "right" }} sm={4}><small >{content.date}</small></Col>
            </Row>
            <hr/>
            {post}
            &nbsp;
            &nbsp;
            <hr/>
        </Container>
         
    )
}
export default Detail;