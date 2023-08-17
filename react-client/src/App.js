import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";
import { fetchWeather } from "./api";
import WeatherInfo from "./Components/WeatherInfo";

function App() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState({});

    useEffect(() => {
        if (city === "") return;

        const fetchWeatherData = async () => {
            try {
                const response = await fetchWeather(city);
                setWeather(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchWeatherData();
    }, [city]);

    return (
        <div className="App">
            <Navbar setCity={setCity} />
            <WeatherInfo weather={weather} />
        </div>
    );
}

export default App;
