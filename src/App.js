import React from "react";
import Main from "./components/Main";
import Badge from "react-bootstrap/Badge";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <div style={{ marginLeft: "20%", marginRight: "20%" }}>
        <BrowserRouter>
          <div style={{ textAlign: "center", marginTop: "5px" }}>
            <h1>
              <Badge pill bg="secondary">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <strong style={{ color: "white" }}>충북대 공지고</strong>
                </Link>
              </Badge>
            </h1>
          </div>

          <Main />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
