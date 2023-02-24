import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import parse from 'html-react-parser';
import ScrapBtn from "./ScrapBtn";
import OriBtn from './OriBtn';
import '../App.css';

function Detail(content) {
    //console.log(content.text);
    let post = parse(content.text);
    //console.log(post);
    return (
        <>
            <Container >
                <Row>
                    <Col sm={8}><strong>{content.title}</strong></Col>
                    <Col style={{ textAlign: "right" }} sm={4}><small >{content.date}</small></Col>
                </Row>
                <hr/>
                <div class="post">
                    {post}
                </div>
                &nbsp;
                &nbsp;
                <hr/>
                <OriBtn url ={content.url}></OriBtn>
                <ScrapBtn title={content.title} link = {content.link}></ScrapBtn>
            </Container>
            
        </>
        
    )
}
export default Detail;

