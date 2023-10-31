import React, { useEffect, useState } from 'react'

export default function Weather() {

    const [weatherData, setweatherData] = useState([]);

    const [cityName, setcityName] = useState("Delhi");

    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityName}`;

    const options = {

        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8dc1c202cemshb799da17a3e26d8p10d2fcjsn026d1d2e50cd',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    const fetchdata = async () => {

        try {

            const response = await fetch(url, options)
            const data = await response.json()
            setweatherData(data);

        } catch (error) {
            console.log(error);
        }
    }

    const searchCity = (e) => {
        e.preventDefault();
        let city = document.getElementById("city").value;
        setcityName(`${city}`);
    }

    useEffect(() => {

        fetchdata();

    }, [cityName]);

    return (
        <>

            <div className="container display-weather " id='weather-container'>

                <nav className="navbar navbar-expand-lg navbar-light" id='weather-nav'>
                    <div className="container-fluid color" >
                        <form className="d-flex">
                            <input id="city" className="form-control me-2" type="search" placeholder="Search City..." aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit" id="submit" onClick={searchCity}>Search</button>
                        </form>
                    </div>
                </nav>

                <h3 className="my-4 text-center">Weather For {cityName} </h3>

                <div className="card mb-4 rounded-3 shadow-sm border-primary weather-card" id='card1'>
                    <div className="card-header py-3 text-white bg-primary border-primary">
                        <h4 className="my-0 fw-normal">Temperature Info</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">{weatherData.temp}<small className="text-muted fw-light"> <sup>0</sup>C</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>Temperature is : {weatherData.temp}</li>
                            <li>Min Temperature is : {weatherData.min_temp}</li>
                            <li>Max Temperature is : {weatherData.max_temp}</li>
                        </ul>
                        <button type="button" className="w-100 btn btn-lg btn-primary"></button>
                    </div>
                </div>

                <div className="card mb-4 rounded-3 shadow-sm border-primary weather-card" id='card2'>
                    <div className="card-header py-3 text-white bg-primary border-primary">
                        <h4 className="my-0 fw-normal">Humidity Info</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">{weatherData.humidity}<small className="text-muted fw-light"> %</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>The Cloud_PCT is : {weatherData.cloud_pct}</li>
                            <li>Feels Like : {weatherData.feels_like}</li>
                            <li>The Humidity is : {weatherData.humidity}</li>
                        </ul>
                        <button type="button" className="w-100 btn btn-lg btn-primary "></button>
                    </div>
                </div>

                <div className="card mb-4 rounded-3 shadow-sm border-primary weather-card" id='card3'>
                    <div className="card-header py-3 text-white bg-primary border-primary">
                        <h4 className="my-0 fw-normal">Wind Info</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">{weatherData.wind_speed}<small className="text-muted fw-light"> km/hr</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>The Wind Speed is : {weatherData.wind_speed}</li>
                            <li>The Sunrise Time is : {weatherData.sunrise}</li>
                            <li>The Sunset Time is : {weatherData.sunset}</li>
                        </ul>
                        <button type="button" className="w-100 btn btn-lg btn-primary"></button>
                    </div>
                </div>

            </div>

        </>
    )
}
