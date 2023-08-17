from flask import request, jsonify
from api import fetch_city_list, fetch_weather_by_city


def configure_routes(app):
    @app.route("/")
    def hello():
        return "Hello! This is the Weather App backend 😎"

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

    @app.route("/", defaults={"path": ""})
    @app.route("/<path:path>")
    def not_found(path):
        return jsonify({"error": "URL Not found"}), 404
