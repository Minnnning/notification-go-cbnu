import React,{useEffect, useState} from "react";
import { useCookies, Cookies } from 'react-cookie';
import Badge from 'react-bootstrap/Badge';

function BookmarkBtn(props) { //학과이름을 props로 받는다
    // 만약 쿠키에 값이 존재하면 다른 버튼을 띄운다
    // 버튼 동작 2개로 나눔 눌렸을때 -> 또 누르면 쿠키삭제
    // 안눌렸으면 쿠키 추가
    const [cookies, setCookie , removeCookie] = useCookies();
    if (cookies.bookmark){
        var a = cookies.bookmark; 
    } else {
        var a = [];
    }
    const [result, setResult] = useState(a.includes(props.name)) //즐겨 찾기에 이미 있는지를 판단
    
    
    
    const setCookieFn = () => { //bookmark에 리스트형태로 저장한다
        if (result == false){
        // 쿠키에 값이 없다면
            if (cookies.bookmark) {
                var bookList = cookies.bookmark;
                bookList.push(props.name);
                setCookie('bookmark',bookList,{maxAge: 10000});
            } else {
                setCookie('bookmark',[props.name],{maxAge: 10000});
            }
            setResult(true);

        } else {
            //쿠키에 값이 있는데 한번더 버튼을 누르면
            //삭제
            var bookList = cookies.bookmark;
            let filtered = bookList.filter((element) => element !== props.name);
            if (filtered.length == 0) {
                removeCookie('bookmark');
            } else {
                setCookie('bookmark',filtered,{maxAge: 10000});
            }
            setResult(false);
        }
    }
          
    //console.log(cookies.bookmark);

    if (result) { //즐겨찾기에 있을떄
        return <Badge pill bg="secondary" onClick={setCookieFn} size="sm" >★</Badge>
    } else { //즐겨찾기에 없을때
        return <Badge pill bg="light" text="secondary" onClick={setCookieFn} size="sm" >★</Badge>
    }
    
}

export default BookmarkBtn;