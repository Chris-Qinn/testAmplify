from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/message", methods=["POST"])
def message():
    data = request.get_json()
    msg = data.get("message", "")
    return jsonify({"reply": f"Server says: You said: {msg}"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
