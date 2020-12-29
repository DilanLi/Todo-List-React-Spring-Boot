import React, { useState } from "react";
import "./style.css";
import {Link} from "react-router-dom";

export default function Welcome(props) {
    return (
    <div className="container mt-5">
         <h2 className="mb-2 welcome">Welcome, {props.match.params.name}</h2>
         <Link to="/todos">Manage your To Dos here</Link>
    </div>
    )
}