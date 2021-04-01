from flask import Flask, jsonify
from flask_restful import Api, Resource
from flask_cors import CORS, cross_origin

app = Flask(__name__)
api = Api(app)


@app.route("/", methods=["GET"])
def get_example():
    """GET in server"""
    response = jsonify(message="Simple server is running")
    return response

@app.route("/", methods=["POST"])
@cross_origin()
def post_example():
    """POST in server"""
    return jsonify(message="POST request returned")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port="5000", debug=True)