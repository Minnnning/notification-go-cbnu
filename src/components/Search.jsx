import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {Link} from "react-router-dom";
import "../App.css";

function Search() {

    const [search, setSearch] = useState("");
    const onChange = (e) => {
        setSearch(e.target.value)
    }
    

    return (
        <div style={{ textAlign: "center", marginTop: "5px"}}>
            <InputGroup className="mb-3" >
                <Form.Control
                placeholder="학과를 입력해주세요"
                value={search} onChange ={onChange}
                />
                <Button as="button" variant="outline-secondary" id="button-addon2" >
                    <Link to={search} variant="outline-secondary" id="button-addon2" style={{ textDecoration: "none" }}>검색</Link>
                </Button>
            </InputGroup>
            </div>
    )
}
export default Search;