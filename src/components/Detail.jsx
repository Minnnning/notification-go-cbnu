import React, { createElement } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import parse from 'html-react-parser';
import ScrapBtn from "./ScrapBtn";

function Detail(content) {
    //console.log(href);
    let post = parse(content.text);
    //console.log(post);
    return (
        <>
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
                <ScrapBtn title={content.title} link = {content.link}></ScrapBtn>
            </Container>
            
        </>
        
    )
}
export default Detail;

