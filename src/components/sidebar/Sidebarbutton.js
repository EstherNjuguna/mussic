import React from 'react'
import { IconContext } from 'react-icons'
import {Link,useLocation} from 'react-router-dom'
function Sidebarbutton(props) {
    const location=useLocation();
    const isActive=location.pathname ===props.to;
    const btnClass=isActive ? "btn-body active ": "btn-body"
    
    return <Link to={props.to}>
        <div className="button-body">
             
            {props.icon}
           <p> {props.title}</p>
        </div>
    </Link>
}
export default Sidebarbutton