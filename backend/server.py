import os
from dotenv import load_dotenv
from flask import Flask
from flask_cors import CORS
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from bson.json_util import dumps


###################
# API Setup
###################
# Set up Flask API
load_dotenv()
api = Flask(__name__)
CORS(api)

# Set up MongoDB connection
uri = os.getenv("MONGO_CONNECTION_URI")
client = MongoClient(uri, server_api=ServerApi("1"))

# Send a ping to confirm a successful connection
try:
    client.admin.command("ping")
    print("Successfully connected to MongoDB!")
except Exception as e:
    print(e)

# Set database and collection
database = client["ListingsDatabase"]["ListingsCollection"]


###################
# API Starts Here
###################
@api.route("/api/getListings", methods=["GET"])
def get_listings():
    listings = database.find_one()
    listingsJSON = dumps(listings)

    # Return database entries
    response_body = listingsJSON
    return response_body


if __name__ == "__main__":
    api.run(debug=True, port=8000)
