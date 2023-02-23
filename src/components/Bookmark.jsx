import React from "react";
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import { useCookies, Cookies } from 'react-cookie';
import {Link} from 'react-router-dom'


function Bookmark() {
    const [cookies] = useCookies()
    if (cookies.bookmark) {
        var markList =[]
        cookies.bookmark.map((element,id)=>{
            markList.push(<tr key ={id}><td><Link to={element} style={{ textDecoration: "none" }} >{element}</Link></td></tr>)
           
        })
    } else {
        var markList =<tr><td>즐겨찾기가 없습니다.</td></tr>;
    }

    return(
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <h6><Badge  className="d-grid gap-2" bg="secondary">즐겨찾기 리스트 ★</Badge></h6>
                </tr>
            </thead>
            <tbody>
                {markList}
            </tbody>
        </Table>
    );
}
export default Bookmark;