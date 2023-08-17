import requests
import os

apiKey = os.environ.get("WEATHER_API_KEY")


def fetch_city_list(city):
    try:
        api_key = apiKey
        city_list_api_url = f"https://api.weatherapi.com/v1/search.json?key={api_key}&q={city}"

        response = requests.get(city_list_api_url)
        city_list = response.json()

        return city_list
    except Exception as e:
        raise Exception("Failed to fetch city list data")


def fetch_weather_by_city(city):
    try:
        api_key = apiKey
        forecast_api_url = f"https://api.weatherapi.com/v1/forecast.json?key={api_key}&q={city}&days=10&aqi=yes&alerts=yes"

        response = requests.get(forecast_api_url)
        forecast_data = response.json()

        return forecast_data
    except Exception as e:
        raise Exception("Failed to fetch weather data")
