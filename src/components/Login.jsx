import React, { useState } from "react";
import "./style.css";

export default function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginSuccess, setLoginSuccess] = useState("");

    function handleUsernameChange(e) {
        setUsername(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function loginClicked() {
        if (username === "awesomeUser" && password === "12345") {
            setLoginSuccess("success");
            props.history.push(`/welcome/${username}`)
        } else {
            setLoginSuccess("unsuccessful")
        }
    }

    return (
        <div className="container mt-5">
                <div className="m-2">Username:  <input id="username" type="text" name="username" value={username} onChange={handleUsernameChange} /></div>
                <div className="m-2">Password:  <input id="password" type="password" name="password" value={password} onChange={handlePasswordChange} /></div>
            <button className="btn btn-primary m-2" onClick={loginClicked}>Login</button>
            {loginSuccess === "unsuccessful" && <div className="alert alert-warning">The username or password is incorrect</div>}
        </div>
    )
}