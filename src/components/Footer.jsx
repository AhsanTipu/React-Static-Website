import React from "react";
import "../css/Design.css";

const Footer=()=>{
    const date =new Date();
    const year=date.getFullYear();
    return(
        <div>
                <footer className="w-100 footer">
                    <p className="ft pt-3 pb-2">CopyRights {year} © Syed Ahsan Ali</p>
                </footer>
            </div>
    )
}
export default Footer;