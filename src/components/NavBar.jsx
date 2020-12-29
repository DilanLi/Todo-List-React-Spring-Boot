import React from 'react';
import {Link} from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
                <div className="container collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/welcome/awesomeUser">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/todos">To Dos</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/logout">Logout</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
