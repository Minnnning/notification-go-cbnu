import React,{useEffect, useState} from "react";
import { useCookies, Cookies } from 'react-cookie';
import Button from 'react-bootstrap/Button';

function ScrapBtn(props) { //제목title + 주소link 를 받는다
    const [cookies, setCookie , removeCookie] = useCookies(['scrap']);
    //console.log(props.link)
    if (cookies.scrap){
        var a =[];
        for (let i =0; i<cookies.scrap.length; i++){
            a.push(cookies.scrap[i][0])
        }

    } else {
        var a = [];
    }

    const [result, setResult] = useState(a.includes(props.title)) //스크랩에 이미 있는지를 판단
    useEffect(()=>{
        setResult(a.includes(props.title));
    },[props.title])//props가 다른것을로 변경된다면 useState가 실행되어 초기화가 되어야하는데 현재 
    //초기화가 되지 않고 state값을 유지시켜서 따로 state를 변경시켜야한다
    

    const setCookieFn = () => { //bookmark에 리스트형태로 저장한다
        if (result == false){
        // 쿠키에 값이 없다면
            if (cookies.scrap) {
                var scrapList = cookies.scrap;
                scrapList.push([props.title,props.link]);
                setCookie('scrap',scrapList,{maxAge: 100000} );
            } else {
                setCookie('scrap',[ [props.title,props.link] ],{maxAge: 100000});
            }
            setResult(true);

        } else {
            //쿠키에 값이 있는데 한번더 버튼을 누르면
            //삭제
            var scrapList = cookies.scrap;
            //console.log(scrapLong);
            var filtered = [];
            for (let i=0; i<scrapList.length; i++){
                if (scrapList[i][0] != props.title) {
                    filtered.push([scrapList[i][0],scrapList[i][1]])
                }
            }

            if (filtered.length == 0) {
                removeCookie('scrap');
            } else {
                setCookie('scrap',filtered,{maxAge: 1000000});
            }
            setResult(false);
        }
    }
    console.log(cookies.scrap);

    if (result) {
        return (
            <div className="d-grid gap-2">
                <Button variant="secondary" size="sm" onClick={setCookieFn}>
                    Scrap
                </Button>
                <br/>
            </div>
        )
        
    } else {
        return (
            <div className="d-grid gap-2">
                <Button variant="light" size="sm" onClick={setCookieFn}>
                    Scrap
                </Button>
                <br/>
            </div>
        )
    }
    
    
}

export default ScrapBtn;