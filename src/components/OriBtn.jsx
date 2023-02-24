import React from "react";
import Button from 'react-bootstrap/Button';

function OriBtn(props) { 
    return (
      <div >
          <a href={props.url} target="_blank" className="d-grid gap-2" style={{textDecoration: 'none'}}>
            <Button variant="light" size="sm">
              원본으로 가기
            </Button>
          </a>
          <br/>
      </div>

    )
    
    
}

export default OriBtn;