import React from 'react';
import './Project.scss';
import Oneproject from '../Oneproject/Oneproject';
import pic from "../../Assets/pic.png";
import pic_1 from "../../Assets/pic_2.png";
import pic_2 from "../../Assets/pic_3.png";
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/all';

const Projects = [
    {
        sub_title:"About me",
        title:"I create products that your users will love",
        title_animation:true,
        text:[<span>I am Ayoub a young specialized in focusing on the user whether the current or the prospective and solve his problems by creating beautiful user experience and interface. <br></br></span>,
              <span>I like to help businesses bring their vision and ideas to life by discovering the business opportunity and the users and the competition, then I develop creative ways that meet the user needs and solve the pain-points so I can design prototypes and test them with users.<br></br><br></br></span>,
              <span>Professional Skills:User Experience Design (UX), User Interface Design (UI), Web Design, Branding, Mobile App Design,HTML, CSS, JS, SASS</span>]
    },
    {
        sub_title:"About me",
        title:"Believe in yourself Donation Concept",
        image:pic,
        title_animation:true,
        image_from_style:{
            maxWidth: "100%",
            transform:" translateY(100%) rotate(-40deg)",
            opacity:0
        },
        image_to_style:{ maxWidth: "100%",
                         maxHeight: "66vh",
                         opacity:1,
                         transform:" translateY(0%) rotate(0deg)"
        }
        },
    {
        sub_title:"Mobile App",
        title:"Follow your football club",
        image:pic_2,
        title_animation:true,
        image_from_style:{
            maxWidth: "200%",
            right:"-20%",
            transform:" translateY(100%) rotate(-40deg)",
            opacity:0
        },
        image_to_style:{ maxWidth: "200%",
                         opacity:1,
                         transform:" translateY(0%) rotate(0deg)"
        },
        backColor:"#fde100",
        textcolor:"#000"
    },
    {
        sub_title:"Website Design",
        title:"Students Monitoring Platform",
        image:pic_1,
        title_animation:true,
        image_from_style:{
            maxWidth: "150%",
            right:"30px",
            transform:"translateX(-100%)",
            top: "50px",
            height: "53vh",
            opacity:0
        },
        image_to_style:{ maxWidth: "150%",
                         opacity:1,
                         transform:"translateX(0%)"
        },
        backColor:"#EEF6F4",
        textcolor:"#ABD1C6"
    },{
        sub_title:"Contact me",
        title:<>Got a project?<br></br>Say Hello</>,
        title_animation:false,
        text:[
            <>
              <h1 style={{margin:0,padding:0}}>hello@laarif.com</h1>
              <div style={{
                        width:'43px' , 
                        height:'3px' , 
                        borderRadius:'20px' , 
                        backgroundColor:"#fff" , 
                        marginTop:'10px'}}></div> 
            </>]
    }
];
var selected = 0;
export default function Project({isMobile}){

    const [my_projects, Setmy_projects] = React.useState(Projects);
    var Project_ref = React.useRef(null);
    const scrollX_event=(e)=>{
        let scrollTo = e.deltaX == 0 ?e.deltaY :e.deltaX;
        let scroll = window.pageXOffset +(scrollTo * 30);
        gsap.to(window, {duration:3, scrollTo: {y: 0, x:scroll} ,ease: "sine.out"});        
    }
    const Project_Scroll_remove=()=>{
        Project_ref.current.removeEventListener("wheel",scrollY_event);
   }
   const Project_Scroll_add=()=>{
    Project_ref.current.addEventListener("wheel",scrollY_event);
    Project_ref.current.addEventListener("touchstart",touch_begin);
    Project_ref.current.addEventListener("touchend",touch_end);
   }
    var timeoutID = null;
    const timeoutcalc=()=>{ 
        Project_Scroll_remove();
        timeoutID = setTimeout(()=>{
                    Project_Scroll_add();
                    timeoutID = null;  
                    },1000);
    }
    const scrollY_event=(e)=>{
        if(timeoutID == null){
            if(e.deltaY > 0 ){
            scrollDown();
            console.log("down"+selected);
            }else if(e.deltaY < 0){
            scrollUp();
            console.log("UP"+selected);
            }             
        }
    }
    var touch_start_position = 0;
    const touch_begin =(e)=>{
        touch_start_position = e.touches[0].clientY;
    }
    const touch_end =(e)=>{
      let touch_end_position = e.changedTouches[0].clientY;
        if(timeoutID == null){
          if(touch_start_position > touch_end_position+5){
            scrollDown();
          }else if(touch_start_position < touch_end_position-5){
            scrollUp();
          }             
        }
    }
    const scrollUp=()=>{
        if(selected>0){
            timeoutcalc();
            my_projects[selected].mobile_selected=false;
            Setmy_projects([...my_projects]);
            selected--;
            gsap.to(Project_ref.current,{y:-(selected*(100/Projects.length))+"%" , duration:1, ease: "sine.out"});
        }
    } 
    const scrollDown=()=>{
        if(selected<Projects.length-1){
            timeoutcalc();
            selected++;
            gsap.to(Project_ref.current,{y:-(selected*(100/Projects.length))+"%" , duration:1 , ease: "sine.out"});
            my_projects[selected].mobile_selected=true;
            Setmy_projects([...my_projects]);        
        } 
    } 
    React.useEffect(()=>{
    gsap.registerPlugin(ScrollToPlugin);
    if(isMobile){
        gsap.to(".Project.mobile", {duration:0.1, y:'0vh'});
        Project_Scroll_add();
        Setmy_projects(my_projects.map((val , index)=>{
            if(index===0){
                val.mobile_selected=true;
                }else{
                val.mobile_selected=false;
            }
            return val;
        }));
    }else{
        Project_ref.current.addEventListener("wheel",scrollX_event);
    }
    },[]);
    return(
        <div className={isMobile ?"Project mobile":"Project"} ref={Project_ref}>
         {
            my_projects.map((val,index)=>{
            return <Oneproject key={index} data={val} isMobile={isMobile}></Oneproject>;
            })
         }
        </div>
    )

}