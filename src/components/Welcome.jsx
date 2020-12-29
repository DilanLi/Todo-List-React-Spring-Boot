import React, { useState } from "react";
import "./style.css";
import {Link} from "react-router-dom";

export default function Welcome(props) {
    return (
    <div>
         <div>Welcome {props.match.params.name}</div>
         <Link to="/todos">To Dos List</Link>
         <div>Daily Inspirations</div>
    </div>
    )
}