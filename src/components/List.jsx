import React,{Suspense, useEffect, useState} from "react";
import { getDatabase, ref, child, get, orderByChild ,query  } from "firebase/database";
import {Link,Routes,Route,Redirect} from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';
import Detail from './Detail';


import Firebase from "./Firebase";

//console.log("data",data);

function List(name) {
    const [posts,setPosts] = useState(null);
    
    const dbRef = ref(getDatabase());
    useEffect(() => {
        get(child(dbRef, name.props)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                setPosts(Object.entries(snapshot.val()));
                //JSON.stringify(snapshot.val())
            } else {
                console.log("No data available");
            }
            }).catch((error) => {
                console.error(error);
            });
    },[])
    if (posts == null) {
        return(
            <div style={{ textAlign: "center"}}>
                &nbsp;
                <h3 style={{ color:"gray"}}>{name.props} 공지사항</h3>
                <hr/>
                <Spinner  animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>)
    } else {
        let postsList = [];
        let routeList = [];
        let num;
        posts.map((element,id) => {
            //console.log(element) // element[0]은 번호
            let post = Object.entries(element[1]); //0은 내용 1은 날짜 2는 제목
            //console.log('post',post)
            if (element[0].length >= 11){
                num = '#'
            } else {
                num =element[0]
            }
            postsList.push(
                <tr key={id}>
                    <td><small>{num}</small></td>
                    <td><Link to={element[0]} style={{ textDecoration: "none" }}><small>{post[2][1]}</small></Link></td>
                    <td><small><center>{post[1][1]}</center></small></td>
                </tr>)
                //console.log(name.props+"/"+element[0])
            routeList.push(
                <Route key = {id} path={element[0]} element={<Detail text={post[0][1]} title = {post[2][1]} date = {post[1][1]}/> }/>
            )
        //console.log(postsList);
        })
        postsList = postsList.reverse(); //저장된 데이터는 번호 때문에 오름차순으로 저장되어 있어 반대로 바꿔서 출력

        

        return(
            <> 
                &nbsp;
                <h3 style={{ textAlign: "center" , color:"gray"}}>{name.props} 공지사항</h3>
                <hr/>
                <Routes>
                    {routeList}
                </Routes>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th><center><small>번호</small></center></th>
                            <th><center><small>제목</small></center></th>
                            <th><center><small>날짜</small></center></th>
                        </tr>
                    </thead>
                    <tbody>
                        {postsList}
                    </tbody>
                </Table>

                
                
            </>)
    }

    
}


export default List;