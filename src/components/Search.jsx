import React,{useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {Link} from "react-router-dom";
import "../App.css";

function Search(props) {
    const [result,setResult] = useState(null);
    let [search, setSearch] = useState("");
    const onChange = (e) => {
        setSearch(e.target.value.toUpperCase())
        search = e.target.value.toUpperCase();
        // console.log('search1',search1)
        let searchList = [];

        if (search) {
            searchList = props.list.filter(a => (a).includes(search));
            let searchListTag =[];
            searchList.map((element,id)=>{
                searchListTag.push(
                <h6 >
                    <Link to={element} style={{ textDecoration: "none" }} className="d-grid gap-2" >
                    <Button size='sm' variant="outline-secondary" key={id} >
                    {element}
                    </Button>
                    </Link>
                </h6>)
            })
            setResult(searchListTag);
            
        } else {
            setResult(search);
        }

    }


    return (
        <div style={{ textAlign: "center", marginTop: "5px"}}>
            <InputGroup className="mb-3" >
                <Form.Control
                placeholder="학과를 입력해주세요"
                 onChange ={onChange}
                />
                <Button as="button" variant="outline-secondary" id="button-addon2" >
                    <Link to={search} variant="outline-secondary" id="button-addon2" style={{ textDecoration: "none" }}>검색</Link>
                </Button>
            </InputGroup>
            {result}
        </div>
    )
}
export default Search;

