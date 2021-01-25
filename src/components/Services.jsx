import React from "react";
import Cards from "./Cards"
import Sdata from "./Sdata"
const Services=()=>{
    return(

       <section id='ser'>
<div className="container">
    <h2 className="pt-5 sera">Our Services</h2>
    <br/>
    <br/>
    <div className="row gy-5">
        {Sdata.map((val, index)=>{
return <Cards key={index}
title={val.title}
imgsrc={val.imgsrc}

/>
        })}
        
    </div>
</div>
       </section>
    )
}

export default Services;