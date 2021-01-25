import React, { useState } from "react";
import "../css/Design.css"
const Contact=()=>{

    const [data, setData]=useState({
        fullname : "",
        email : "",
    })

    const inputEvent=(e)=>{

const {name, value}=e.target;
setData((pre)=>{
    return{
        ...pre,
        [name] : value,
    }
});
    };
    const submita=(e)=>{
    e.preventDefault();
    alert(`${data.fullname} `+"\n"+  `${data.email}`)
    }
    return(

        <div>
            <div className="container">
                <h2 className="sera pt-5 pb-5">Contact Us</h2>
                <div className="row">
                    <div className="col-xs-11 col-sm-11 col-md-7 ff">
                        <div className="form shadow-lg p-3 mb-5 bg-white rounded">
             <br/>
             <br/>
                    <form >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
          <input name="fullname" onChange={inputEvent} value={data.fullname} type="text" placeholder="Enter your Name" className="form-control aa" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Email address</label>
          <input placeholder='Enter you email' name="email" type="email" onChange={inputEvent} value={data.email} className="form-control aa" id="exampleInputPassword1" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>

        </div>
       
        <button onClick={submita} type="submit" className="btn btn-primary">Submit</button>
      </form>
      <br/>
      <br/>
      </div>
      
                    </div>
                </div>
 
      </div>
        </div>
    )
}

export default Contact;