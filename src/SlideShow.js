import React from 'react'
import "./slideshow.css"
import Card from "./Card";
import herbius from "./herbius 240w.jpg";
import ceasar from "./ceasar 320w.jpg";
import gladiator from "./gladiator 480w.jpg";
import monster from "./monter 600w.jpg";
import holyled from "./holyled 1000w.jpg";


function SlideShow() {

    return (
        <div className="slideShow">
             <Card title="Herbius 240W" imgSrc={herbius} price="מבצע 1,300 שח" />
             <Card title="Ceasar 320W" imgSrc={ceasar} price="מבצע 1,800 שח"/>
             <Card title="Gladiator 480W" imgSrc={gladiator} price="מבצע 3,450 שח"/>
             <Card title="Monster 600W" imgSrc={monster} price="מבצע 3,850 שח" />
             <Card title="HolyLed 1000W" imgSrc={holyled} price="מבצע 4,300 שח" />
            
            




        </div>
    )
}

export default SlideShow
