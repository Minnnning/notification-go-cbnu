import React from "react";
import Search from "./Search"
import { BrowserRouter, Routes , Route, Link} from "react-router-dom";
import List from './List';
import Bookmark from "./Bookmark";
import Scrap from "./Scrap";
import ScrollToTop from "./ScrollToTop";

function Main() {

    let uDepartment = [
        "정보통신공학부","컴퓨터공학과","SW중심사업단","소프트웨어공학부","지능로봇공학과","전기공학부","전자공학부",
        "토목공학부","기계공학부","화학공학과","신소재공학과","건축공학과","안전공학과","환경공학과","공업화학과","도시공학과","건축학과","테크노산업공학과",
        
    ]

    let uDepartmentList = []
    uDepartment.map((element1,id) => {
        uDepartmentList.push(<Route key={id} path={element1+"/*"} element={<List props={element1}/>}></Route>)
    })

    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={
                    <>
                    <Search list={uDepartment}/> 
                    <Bookmark/> 
                    <Scrap/>
                    </>}>
                </Route>
                {uDepartmentList}
            </Routes>
            
        </>
    )
}

export default Main;