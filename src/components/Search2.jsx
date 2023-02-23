import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import {Link} from "react-router-dom";
import "../App.css";

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
function Search2(props) {
  
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <p
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </p>
  ));
  
  // forwardRef again here!
  // Dropdown needs access to the DOM of the Menu to measure it
  const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = useState('');
    
      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <Form.Control
            autoFocus
            className="mx-3 my-1 w-auto"
            placeholder="Type to filter..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value),
            )}
          </ul>
        </div>
      );
    },
  );
  var DepartmentList =[];
  props.list.map((element,id)=>{
      DepartmentList.push(<Dropdown.Item eventKey={id} ><Link style={{textDecoration
      :'none'}} to={element}>{element}</Link></Dropdown.Item>)
  })
  
  return(
    <Dropdown show>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
      </Dropdown.Toggle>
  
      <Dropdown.Menu as={CustomMenu}>
        {DepartmentList}
      </Dropdown.Menu>
    </Dropdown>
  )
}
export default Search2;