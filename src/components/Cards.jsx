import React from "react";

const Cards=(props)=>{

    return(
        <div className="col-3">
<div className="card " style={{width: '20rem'}}>
        <img src={props.imgsrc} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
        </div>
    )
}

export default Cards;