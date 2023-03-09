import React from "react";
import Button from 'react-bootstrap/Button';

function OriBtn(props) { 

  function goToURL() {
    window.open(props.url);
  }

    return (
      <div className="d-grid gap-2"> 
        <Button type="button" variant="light" size="sm" onClick={goToURL}>
          원문 이동
        </Button>
        <br/>
      </div>

    )
    
    
}

export default OriBtn;