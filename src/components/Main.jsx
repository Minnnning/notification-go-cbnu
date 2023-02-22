import React from "react";
import Search from "./Search"
import { BrowserRouter, Routes , Route, Link} from "react-router-dom";
import List from './List';
import Bookmark from "./Bookmark";
import Scrap from "./Scrap";

function Main() {

    let uDepartment = [
        "정보통신공학부",
        "컴퓨터공학과",
        "소프트웨어중심사업단",
        "소프트웨어공학부"
    ]

    let uDepartmentList = []
    uDepartment.map((element1,id) => {
        uDepartmentList.push(<Route key={id} path={element1+"/*"} element={<List props={element1}/>}></Route>)
    })

    return (
        <>
            <Routes>
                <Route path="/" element={
                    <>
                    <Search/> 
                    <Bookmark/> 
                    <br/> 
                    <Scrap/>
                    </>}>
                </Route>
                {uDepartmentList}
            </Routes>
            
        </>
    )
}

export default Main;