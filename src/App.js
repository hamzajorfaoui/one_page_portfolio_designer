import React from 'react';
import './App.scss';
import Loading from './Components/Loading/Loading';
import Header from './Components/Header/Header';
import Project from './Components/Project/Project';
import Cursor from './Components/Cursor/Cursor';

function App() {
  const [loading , setloading] = React.useState(false);
  const [isMobile , setisMobile]=React.useState(false);
  React.useEffect(()=>{
  // var mediaquerie = window.matchMedia('(max-width:600px)');
  // function screnTest(e){
  //     if(e.matches){
  //       setisMobile(true);
  //     }else{
  //       setisMobile(false);
  //     }
  // }
  // screnTest(mediaquerie);
  // mediaquerie.addListener(screnTest);

  if(/Mobi/.test(navigator.userAgent)){
    setisMobile(true);
    document.getElementById("app").style.position="fixed";
    document.documentElement.className="fixed";
  }else{
    document.documentElement.style.cursor='none';
    setisMobile(false);
  }
  
  },
  []);
  return (
    <>
    {!isMobile ?<Cursor></Cursor>:<></>}
    <div className="App" id="app">
    {
     loading ? <><Header></Header><Project isMobile={isMobile}></Project></> :<Loading loded={()=>{setloading(true)}}></Loading>
    }
    </div>
    </>
  );
}

export default App;
