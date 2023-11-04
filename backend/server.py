from flask import Flask
from flask_cors import CORS

api = Flask(__name__)
CORS(api)


@api.route("/")
def my_profile():
    response_body = {
        "message": "Hello world!",
    }

    return response_body


if __name__ == "__main__":
    api.run(debug=True, port=8000)
