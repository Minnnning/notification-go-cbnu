import React from "react";
import Table from 'react-bootstrap/Table';
import { useCookies, Cookies } from 'react-cookie';
import {Link} from 'react-router-dom'

function Scrap() {
    const [cookies] = useCookies();
    if (cookies.scrap) {
        var scrapList =[]
        console.log(cookies.scrap);
        cookies.scrap.map((element,id)=>{
            scrapList.push(<tr key ={id}><td><Link to={element[1]} style={{ textDecoration: "none" }} >{element[0]}</Link></td></tr>)
        })
    } else {
        var scrapList = <tr><td>스크랩된 글이 없습니다.</td></tr>;
    }
    return (
        <Table striped bordered hover size="sm">
        <thead>
            <tr>
            스크랩 리스트
            </tr>
        </thead>
        <tbody>
           {scrapList}
        </tbody>
    </Table>
    )
}
export default Scrap;