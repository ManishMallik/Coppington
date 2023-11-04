from flask import Flask

api = Flask(__name__)


@api.route("/")
def my_profile():
    response_body = {
        "message": "Hello world!",
    }

    return response_body
