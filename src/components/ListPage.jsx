import React, { useState } from "react";
import Table from 'react-bootstrap/Table';

function ListPage(props) {
    let long = props.list.length;
    
    //10개씩 보여주고 num에 따라서 몇번째인지 결정된다
    //[0:10][10:20][20:]
    let dataList =[];
    let data = Math.floor(long/10);
    let rData = long % 10;
    if (rData) {
        let t = 10;
        for (var i =0; i<data;i++) {
            dataList.push(t);
            t = t+10;
        }
        dataList.push(dataList[data-1]+rData);
    } else {
        let t = 10;
        for (var i =0; i<data;i++) {
            dataList.push(t);
            t = t+10;
        }
    }
    var a = dataList[props.number-1];
    let list = props.list.slice(a-rData, a );
    

    return (
        <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th><center><small>번호</small></center></th>
                            <th><center><small>제목</small></center></th>
                            <th><center><small>날짜</small></center></th>
                        </tr>
                    </thead>
                    <tbody>
                        {list}
                    </tbody>
                    
                </Table>
    )
}

export default ListPage;