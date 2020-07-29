import React from 'react';
import './Header.scss';
import LOGO from '../../Assets/logo.svg';
import ContactMe from '../../Assets/Contact me.svg';
import gsap from 'gsap';
export default function Header(){

React.useEffect(()=>{
gsap.to(".Header",{duration:1,y:0 , delay:1});
},[])
    return(
        <header className="Header">
          <div className="logo">
            <span>Ayoub Laarif</span>
            {/* <div className="line"></div> */}
          </div>
          <div className="contactme" >
            <span>Contact me</span> 
            <div className="line"></div>
          </div>
        </header>
    )
}