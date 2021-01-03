import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import HelloWorldService from "../api/todo/HelloWorld";

export default function Welcome(props) {
    const [gifUrl, setGifUrl] = useState(null);
    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        function getGif() {
            HelloWorldService.getGiphyGif()
                .then((res) => {
                    //find a random gif with index inbetween 0-19 and save the url to gifUrl
                    let randomIndex = Math.floor(Math.random() * 20);
                    setGifUrl(res.data.data[randomIndex].images.fixed_height.url)
                })
                .catch((err) => console.log(err));
        }
        getGif()
    }, [])

    function getJson() {
        HelloWorldService.executeHelloWorldPathVariableService(props.match.params.name)
            .then(res => {
                console.log(res.data);
                setApiData(res.data.message)
            }
            )
            .catch(err => console.log(err))
    }

    return (
        <div className="container mt-5">
            <h3 className="mb-2 welcome">Welcome, {props.match.params.name}
            <br />
             ready to rock the day?</h3>
            {gifUrl && <img src={gifUrl} alt="sunglasses-gif" className="mt-2" />}
            <br /><br />
            <div><Link to="/todos">Manage your To Dos here</Link></div>
            <button className="btn btn-primary mt-2" onClick={getJson}>JSON button</button>
            <p>{apiData}</p>
        </div>
    )
}