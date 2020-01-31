#importing all libraries
import sys
import geopandas as gpd
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import pyqtgraph as pg

from shapely.geometry import Point, LineString

def data_stations(csv_data_stations):
    stations = pd.read_csv(csv_data_stations)

    stations = stations[['lon','lat']]

    # STATIONS = {}

    # STATIONS = {{"longitude": stations['lon'][i],
    #               "latitude": stations['lat'][i]} for i in stations}



    # STATIONS = {
    #     'station1': {'location': 'build an API'},
    #     'station2': {'location': '?????'},
    #     'station3': {'location': 'profit!'},
    # }

    return stations #, STATIONS

# if __name__ == '__main__':
#     # Do some local work which should not be reflected while importing this file to another module.
#     data_stations(csv_data_stations)


def gen_user(madrid_stations):
    STATIONS = {}
    for i in madrid_stations[['lon']]:
        column_lon = madrid_stations[i]
        lon = column_lon.values

    for j in madrid_stations[['lat']]:
        column_lat = madrid_stations[j]
        lat = column_lat.values

    for k in range(len(lon)):
        STATIONS['Station: ' + str(k+1)] = {'longitude': lon[k], 'latitude': lat[k]}



            #'station1':
            #           {'location':
            #               {'longitude': 40,45678},
            #               {'latitude': 3,34987}
            #           }

    # STATIONS = {'station1': 
        #           {'location':
        #               {'longitude': 40,45678},
        #               {'latitude': 3,34987}
        #           },
        #         'station2': 
        #           {'location':
        #               {'longitude': 41,8767},
        #               {'latitude': 3,98355}
        #           },
        #        }
    return lon, lat,STATIONS
