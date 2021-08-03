import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./SWMovies.css";

export default function SWMovies() {
    const [number, setNumber] = useState(1);
    const [movieData, setMovieData] = useState({})
    // useEffect is triggered whenever there is a re-render
    useEffect(() => {
        // to make an async, create an async function inside the useEffect hook
        const getMovieData = async () => {
            const response = await axios.get(`https://swapi.dev/api/films/${number}`, { crossdomain: true });
            return response;
        }
        async function fetchData() {
            await getMovieData()
                .then(response => {
                    var data = response.data;
                    setMovieData({
                        title: data.title,
                        opening_crawl: data.opening_crawl
                    })
                })

        }
        fetchData();
    }, [number]) // the second param to useEffect indicates what state to watch. useEffect will only be triggered when that specific state is changed. Can take muliple state variables


    return (
        <div className="container">
            <h1>Pick A Movie</h1>
            <h4>Current Movie: {number}</h4>
            <select value={number} onChange={e => setNumber(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
            <div className="movieInfo">
                <h2>{movieData.title}</h2>
                <p>{movieData.opening_crawl}</p>
            </div>

        </div>
    )
}