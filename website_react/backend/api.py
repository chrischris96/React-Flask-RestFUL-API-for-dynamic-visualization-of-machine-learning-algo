from flask import Flask
from flask_restful import reqparse, abort, Api, Resource
from flask_cors import CORS

from madrid_analysis import data_stations, gen_user

path = r'./air-quality-madrid/stations.csv'

madrid_stations = data_stations(path)
lon, lat,STATIONS = gen_user(madrid_stations)

app = Flask(__name__)
CORS(app)

api = Api(app)


@app.route("/")

def abort_if_station_doesnt_exist(station_id):
    if station_id not in STATIONS:
        abort(404, message="Station {} doesn't exist".format(station_id))


parser = reqparse.RequestParser()
parser.add_argument('task')


# Station
# shows a single station item and lets you delete a station item
class Station(Resource):
    def get(self, station_id):
        abort_if_station_doesnt_exist(station_id)
        return STATIONS[station_id]

    def delete(self, station_id):
        abort_if_station_doesnt_exist(station_id)
        del STATIONS[station_id]
        return '', 204

    def put(self, station_id):
        args = parser.parse_args()
        task = {'task': args['task']}
        STATIONS[station_id] = task
        return task, 201


# StationList
# shows a list of all STATIONS, and lets you POST to add new tasks
class StationList(Resource):
    def get(self):
        return STATIONS

    def post(self):
        args = parser.parse_args()
        station_id = int(max(STATIONS.keys()).lstrip('station')) + 1
        station_id = 'station%i' % station_id
        STATIONS[station_id] = {'task': args['task']}
        return STATIONS[station_id], 201


##
## Actually setup the Api resource routing here
##
api.add_resource(StationList, '/stations')
api.add_resource(Station, '/stations/<station_id>')


if __name__ == '__main__':
    app.run(debug=True)
