import React from 'react'
import "./card.css";
import paypal from "./paypal.png";

function Card({price,imgSrc,title}) {
    return (
        <div>
           <div className="Card">
            <img src={imgSrc}/>
            <h3>{title}</h3> 
            <h4>{price}</h4>
            <button><img src={paypal}/></button>
            <h2>the other side</h2>
            

           </div>
          </div>


    )
}

export default Card
