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
        if (username === "awesomeUser" && password === "12345"){
            setLoginSuccess("success");
            props.history.push("/welcome")
        } else {
            setLoginSuccess("unsuccessful")
        }
    }

    return (
        <div>
            Username: <input id="username" type="text" name="username" value={username} onChange={handleUsernameChange} />
            Password: <input id="password" type="password" name="password" value={password} onChange={handlePasswordChange} />
            <button onClick={loginClicked}>Login</button>
            {loginSuccess === "success" && <div>Login successful!</div>}
            {loginSuccess === "unsuccessful" && <div>The username or password is incorrect</div>}
        </div>
    )
}