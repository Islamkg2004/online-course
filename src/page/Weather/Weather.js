import React from 'react';
import {useState} from "react";
import axios from "axios";
import './weather.css'
function Weather(props) {

    const [data, setData] = useState({});
    const [location, setLocation] = useState("");

    const url = ` https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=ru&appid=bf1c80ecb43683e67aad19e95dfcfe26`;

    const searchLocation = (event) => {
        if (event.key === "Enter") {
            axios.get(url).then((response) => {
                setData(response.data);
                console.log(response.data);
            });
            setLocation("");
            console.log(data);
        }
    };
    return (
        <div className="app">
            <div className="search">
                <input
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    onKeyPress={searchLocation}
                    placeholder="Введите название города или страны!"
                    type="text"
                />
            </div>
            <div className="container">
                <div className="top">
                    <div className="location">
                        <p>{data.name}</p>
                    </div>
                    <div className="temp">
                        {data.main ? <h1>{data.main.temp.toFixed()  - 273 }</h1> : null}
                    </div>
                    <div className="description">
                        {data.weather ? <p>{data.weather[0].description }</p> : null}
                        {data.name !== undefined && (
                            <div className="bottom">
                                <div className="feels">
                                    <p>Чувствуется как</p>
                                    {data.main ? (
                                        <p className="bold">{data.main.feels_like.toFixed() - 273}</p>
                                    ) : null}

                                </div>
                                <div className="humidity">
                                    <p>Влажность</p>
                                    {data.main ? <p className="bold">{data.main.humidity}%</p>
                                        : null}

                                </div>
                                <div className="wind">
                                    <p>Скорость ветра</p>
                                    {data.wind ? (
                                        <p className="bold">{data.wind.speed.toFixed()}м/с</p>
                                    ) : null}

                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );

}

export default Weather;