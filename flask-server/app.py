from routes import configure_routes
from flask import Flask
from dotenv import load_dotenv
from flask_cors import CORS
load_dotenv()

app = Flask(__name__)
CORS(app)
configure_routes(app)

if __name__ == "__main__":
    app.run(debug=True)
