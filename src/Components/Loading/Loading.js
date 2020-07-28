import React from 'react';
import './Loading.scss';
import gsap from 'gsap';

export default function Loading({loded}){

    const loding_leave=()=>{
        gsap.to(".Loading",{duration:1,opacity:0,y:100,onComplete:()=>{loded()}});
    }
    var number_span= React.useRef(null);
    React.useEffect(()=>{
    let percentage = 0;
    let it = setInterval(()=>{
     percentage++;
     number_span.current.innerText=percentage;

     if(percentage===100){
      clearInterval(it);
      loding_leave();
     }
    },5);
    },[])
    return(
        <div className="Loading"> 
        <h1 className="Loading_number"><span ref={number_span}>0</span>%</h1>
        </div>
    )
}