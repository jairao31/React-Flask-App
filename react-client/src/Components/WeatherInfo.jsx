import React from "react";

const WeatherInfo = ({ weather }) => {
    const { location, current, forecast } = weather || {};
    console.log(weather);
    return (
        <div>
            {location || current || forecast ? (
                <div>
                    <div className="current">
                        <div>
                            <h1>
                                {location.name}, {location.country}
                            </h1>
                            <p>Latitude: {location.lat}</p>
                            <p>Longitude: {location.lon}</p>
                            {location.localtime && (
                                <p>
                                    Local Time:{" "}
                                    {new Date(
                                        location.localtime
                                    ).toLocaleTimeString()}
                                </p>
                            )}
                        </div>
                        <div>
                            <img
                                style={{ width: "10rem" }}
                                src={current.condition.icon}
                                alt=""
                            />
                            <p>Condition: {current.condition.text}</p>
                        </div>
                    </div>

                    <div className="currentInfo">
                        <div>
                            <h2>
                                Temp: {current.temp_c} °C | {current.temp_f} °F
                            </h2>

                            <p>
                                Feels like: {current.feelslike_c} °C |{" "}
                                {current.feelslike_f} °F
                            </p>
                            <p>Humidity: {current.humidity}</p>
                            <p>Wind Direction: {current.wind_dir}</p>
                            <p>
                                Wind: {current.wind_kph} Km/Hr |{" "}
                                {current.wind_mph} Mile/Hr
                            </p>
                        </div>
                        <div>
                            <h4>Hourly Forecast</h4>
                            <ul>
                                {forecast.forecastday[0].hour.map(
                                    (hour, idx) => (
                                        <li key={idx}>
                                            {new Date(
                                                hour.time
                                            ).toLocaleTimeString()}
                                            : {hour.temp_c} °C | {hour.temp_f}{" "}
                                            °F
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                        <div>
                            <h4>10 Day Forecast</h4>
                            <ul>
                                {forecast.forecastday.map((day, idx) => (
                                    <li key={idx}>
                                        {day.date}: {day.hour[0].temp_c} °C |{" "}
                                        {day.hour[0].temp_f} °F
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ) : (
                <h3>Search for a city to get started!</h3>
            )}
        </div>
    );
};

export default WeatherInfo;
