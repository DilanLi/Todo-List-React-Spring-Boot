import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Welcome(props) {
    const [gifUrl, setGifUrl] = useState(null);

    useEffect(() => {
        function getGif() {
            axios
            .get(
                "https://api.giphy.com/v1/gifs/search?q=sunglasses&api_key=dc6zaTOxFJmzC&limit=20"
            )
            .then((res) => {
                //find a random gif with index inbetween 0-19 and save the url to gifUrl
                let randomIndex = Math.floor(Math.random() * 20);
                setGifUrl(res.data.data[randomIndex].images.fixed_height.url)
            })
            .catch((err) => console.log(err));
        }
        getGif()
      }, [])
      
      

    return (
        <div className="container mt-5">
            <h2 className="mb-2 welcome">Welcome, {props.match.params.name}</h2>            
            <img src={gifUrl} alt="sunglasses-gif" />
            <div><Link to="/todos">Manage your To Dos here</Link></div>
        </div>
    )
}