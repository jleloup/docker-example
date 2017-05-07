import json

from flask import Flask, Response
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/motos')
def handle_moto_requests():

    payload = json.dumps(
        {
            'Kawazaki': ['ER-6N', 'ER-6F'],
            'Honda': ['CBF 500']
        }
    )

    resp = Response(payload, status=200, mimetype='application/json')
    return resp


@app.route('/drivers')
def handle_drivers_requests():

    payload = json.dumps([
        'Charlotte',
        'Morgan',
        'Julien'
    ])

    resp = Response(payload, status=200, mimetype='application/json')
    return resp

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')