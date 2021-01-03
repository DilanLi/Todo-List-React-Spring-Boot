import React from 'react';
import Authentication from "../Authentication.js";
import {Route, Redirect} from "react-router-dom";

export default function AuthenticatedRoutes(props) {
    if (Authentication.getLoggedInUsername()) {
        return <Route {...props}/>
    } else {
       return <Redirect to="/login"/>
    }
}
