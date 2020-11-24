import React from 'react'
import "./logo.css";
import logo from "./logo.png";
import ledlight from "./green3.jpeg";
import catDraw from "./kitty.png";
import vero from "./vero.png"
import linkedin from "./linkedin.png"
import amino from "./amino.jpg"
function Logo() {
    return (
        <div className="LogoPic">
             {/* <button><img src={vero}/></button>
             <button><img src={linkedin}/></button>
             <button><img src={amino}/></button> */}
             {/* <p>Get Ready For The Best Light Ever</p> */}
          {/* <img className="ledlights" src={ledlight}/> */}
          <img className="kitty" src={catDraw}/>
          <img className="logo" src={logo}/>
        </div>
    )
}

export default Logo
