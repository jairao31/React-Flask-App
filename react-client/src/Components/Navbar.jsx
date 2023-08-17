import React, { useState } from "react";
import { fetchCityList } from "../api";

const Navbar = ({ setCity }) => {
    const [searchList, setSearchList] = useState([]);

    return (
        <div className="navbar">
            <h2>WeatherApp🌦️</h2>
            <ul>
                {searchList?.map((city) => (
                    <li
                        key={city.id}
                        onClick={() => {
                            setCity(city.name);
                            setSearchList([]);
                        }}
                    >
                        {city.name}, {city.country}
                    </li>
                ))}
            </ul>
            <div>
                <input
                    type="text"
                    placeholder="Search City..."
                    onChange={async (e) => {
                        if (e.target.value === "") return setSearchList([]);
                        try {
                            const response = await fetchCityList(
                                e.target.value
                            );
                            setSearchList(response.data);
                        } catch (error) {
                            console.log(error);
                        }
                    }}
                />
                <button>Search</button>
            </div>
        </div>
    );
};

export default Navbar;
