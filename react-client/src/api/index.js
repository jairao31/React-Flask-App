import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:5000",
});

export const fetchCityList = async (city) => {
    try {
        const url = `/cities/${city}`;
        const response = await api.get(url);
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const fetchWeather = async (city) => {
    try {
        const url = `/weather/${city}`;
        const response = await api.get(url);
        return response;
    } catch (error) {
        throw new Error(error);
    }
};
