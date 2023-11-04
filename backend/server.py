from flask import Flask
from flask_cors import CORS
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from bson.json_util import dumps

###################
# API Setup
###################
# Set up Flask API
api = Flask(__name__)
CORS(api)

# Set up MongoDB connection
uri = "mongodb+srv://admin:CuPeBtnHjDuUGchX@coppingtoncluster.7xxwfc0.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(uri, server_api=ServerApi("1"))

# Send a ping to confirm a successful connection
try:
    client.admin.command("ping")
    print("Successfully connected to MongoDB!")
except Exception as e:
    print(e)

# Set database
database = client["ListingsDatabase"]["ListingsCollection"]


###################
# API Starts Here
###################
@api.route("/api/getListings", methods=["GET"])
def get_listings():
    listings = database.find_one()
    print(listings)

    listingsJSON = dumps(listings)
    print(listingsJSON)

    # Return database entries
    response_body = listingsJSON
    return response_body


if __name__ == "__main__":
    api.run(debug=True, port=8000)
