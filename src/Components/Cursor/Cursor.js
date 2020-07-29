import React from 'react';
import './Cursor.scss';
export default function Cursor(){
    React.useEffect(()=>{    
        var cursor = document.getElementById('cursor');
        var minicursor = document.getElementById('minicursor');
        window.addEventListener('mousemove', function(e){
        var x = e.pageX;
        var y = e.pageY;
        minicursor.style.left = x + "px";
        minicursor.style.top = y + "px";
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
       });
       document.addEventListener('mouseleave', function(e){
                cursor.classList.add("cursor_hidden");
        minicursor.classList.add("cursor_hidden");
        cursor.classList.remove("cursor_active");
        minicursor.classList.remove("cursor_active");
       });
       document.addEventListener('mouseenter', function(e){
                cursor.classList.remove("cursor_hidden");
        minicursor.classList.remove("cursor_hidden");
        cursor.classList.add("cursor_active");
        minicursor.classList.add("cursor_active");
       });
       document.addEventListener('mousedown', function(e){
        cursor.classList.add("cursor_down");
       });
       document.addEventListener('mouseup', function(e){
        cursor.classList.remove("cursor_down");

       });

    },[])
    return(
        <>
        <div id="cursor"></div> 
        <div id="minicursor"></div>
        </>
    )
}