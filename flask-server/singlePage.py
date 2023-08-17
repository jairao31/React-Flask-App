from flask import Flask, request, jsonify
import requests

app = Flask(__name__)


@app.route("/")
def hello():
    return "Hello! This is the Weather App backend 😎"


def fetch_city_list(city):
    try:
        api_key = "YOUR_WEATHER_API_KEY"
        city_list_api_url = f"https://api.weatherapi.com/v1/search.json?key={api_key}&q={city}"

        response = requests.get(city_list_api_url)
        city_list = response.json()

        return city_list
    except Exception as e:
        raise Exception("Failed to fetch city list data")


def fetch_weather_by_city(city):
    try:
        api_key = "YOUR_WEATHER_API_KEY"
        forecast_api_url = f"https://api.weatherapi.com/v1/forecast.json?key={api_key}&q={city}&days=10&aqi=yes&alerts=yes"

        response = requests.get(forecast_api_url)
        forecast_data = response.json()

        return forecast_data
    except Exception as e:
        raise Exception("Failed to fetch weather data")


@app.route("/cities/<query>")
def get_city_list(query):
    try:
        city_list = fetch_city_list(query)
        return jsonify(city_list)
    except Exception as e:
        return jsonify({"errorMsg": "Failed to fetch city list data", "message": str(e)}), 500


@app.route("/weather/<city>")
def get_weather(city):
    try:
        forecast_data = fetch_weather_by_city(city)
        return jsonify(forecast_data)
    except Exception as e:
        return jsonify({"errorMsg": "Failed to fetch weather data", "message": str(e)}), 500


@app.route("/about")
def about():
    return "This is the about page."


@app.route("/contact")
def contact():
    return "This is the contact page."


@app.route("*")
def not_found():
    return jsonify({"error": "URL Not found"}), 404


if __name__ == "__main__":
    app.run(debug=True)
