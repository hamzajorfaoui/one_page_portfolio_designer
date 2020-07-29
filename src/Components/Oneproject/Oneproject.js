import React from 'react';
import './Oneproject.scss';
import gsap from 'gsap';

export default function Oneproject({data , isMobile}){
   var image = React.useRef(null);
   var Title = React.useRef(null);
   var OneP= React.useRef(null);
   
   React.useEffect(()=>{
       gsap.to(OneP.current,{duration:2,height:'calc(var(--vh, 1vh) * 100)' , onComplete:()=>{Title.current.classList.add('active')}});
   },[]);
   React.useEffect(()=>{
   if(isMobile){
       if(data.mobile_selected){
        Oneproject_hover();
       }else{
        Oneproject_leave();
       }
   }
  },[data.mobile_selected]);

   const Oneproject_hover =()=>{
    OneP.current.classList.add("hover");
       if(data.image_to_style){
        gsap.to(image.current,{duration:1,...data.image_to_style});   
       }
       if(data.textcolor){
        gsap.to(Title.current,{duration:.5,color:data.textcolor});
      }
      Cursor_hover();
   }
   const Oneproject_leave =()=>{
    OneP.current.classList.remove("hover");
    if(data.image_from_style){
     gsap.to(image.current,{duration:1,...data.image_from_style});   
    }
    if(data.textcolor){
        gsap.to(Title.current,{duration:.5,color:"#fff"});
    }
    Cursor_leave();
   }
   const Cursor_hover=()=>{
    if(document.getElementById('cursor') && document.getElementById('minicursor')){
        document.getElementById('cursor').style.borderColor = data.textcolor;
        document.getElementById('minicursor').style.backgroundColor = data.textcolor;
    } 
   }
   const Cursor_leave=()=>{
    if(document.getElementById('cursor') && document.getElementById('minicursor')){
        document.getElementById('cursor').style.borderColor = '#fff';
        document.getElementById('minicursor').style.backgroundColor = '#fff';
    } 
   }

    return(
        <div className={isMobile ?"OneProject mobile":"OneProject"}
            onMouseEnter={!isMobile ?Oneproject_hover:()=>{}} 
            onMouseLeave={!isMobile ?Oneproject_leave:()=>{}} 
            ref={OneP}>
           <div className={!data.title_animation?"Title":"Title animate"} ref={Title}>
            <span>{data.sub_title}</span>
            <h1 >{data.title}</h1>
            {
                data.text ?<div className="more_text">
                           <span>
                           {
                               data.text.map((val,index)=>(
                                <span key={index}>
                                    {val}
                                </span>
                               ))
                           }
                           </span>
                           </div> 
                          :<></>
            }
           </div>
           <div className="more" style={data.backColor?{backgroundColor:data.backColor}:{}}>
            {
            data.image ?<div className="cadre">
                            <div className="images">
                                <img src={data.image} className="pic" style={data.image_from_style} ref={image}/> 
                            </div>
                        </div>
                        :<></>
            }
           </div>
           <a className="url" href="#"></a>
        </div>
    )
}