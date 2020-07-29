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

    },[])
    return(
        <>
        <div id="cursor"></div> 
        <div id="minicursor"></div>
        </>
    )
}