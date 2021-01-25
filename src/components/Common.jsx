import React from 'react';
import "../css/Design.css"
import Footer from "./Footer"
const Common=(props)=>{
    return(

        <div>
<div className="container">
    <div className="row">
        <div className="col-md-6 col-sm-12 col-xs-12">
            <div className="Word">
<h1 className="pb-2 pt-3 mainh">{props.name} <br/>{props.saname} <span style={{color:"skyblue"}}>{props.sname}</span> </h1>
<h5 style={{color:"skyblue"} }>{props.tname}</h5>

<br/>
<a href="mailto:syedahsan2305@gmail.com">
    <button className="btn btn-outline-info" >Let's Connect</button>
    </a>
</div>
        </div>
        <div className="col-md-6 col-sm-12 col-xs-12 ">
<img src={props.imgs} className="img-fluid  animated div-center"  alt=""/>
        </div>
    </div>
</div>

        </div>
    )
    }

    export default Common;