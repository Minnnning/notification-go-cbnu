import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useCookies, Cookies } from 'react-cookie';
import Container from 'react-bootstrap/Container';

function Bookmark() {
    const [cookies] = useCookies()
    if (cookies.bookmark) {
        var markList =[]
        cookies.bookmark.map((element,id)=>{
            markList.push(<Dropdown.Item  eventKey={id} href={element} >{element}</Dropdown.Item>)
           
        })
    } else {
        var markList = <Dropdown.Item  disabled ='true' >Noting</Dropdown.Item>;
    }

    return(
        
        <DropdownButton className="d-grid gap-2" variant='secondary' size="sm" id="dropdown-basic-button" title="즐겨찾기">
            {markList}
        </DropdownButton>       
        
    );
}
export default Bookmark;