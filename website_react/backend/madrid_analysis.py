#importing all libraries
import sys
import geopandas as gpd
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import pyqtgraph as pg

from shapely.geometry import Point, LineString

def data_stations(csv_data_stations):
    stations = pd.read_csv(csv_data_stations, encoding='latin1')
    stations = stations[['lon', 'lat', 'neighborhood']]

    return stations


def gen_user(madrid_stations):
    STATIONS = {}
    for i in madrid_stations[['lon']]:
        column_lon = madrid_stations[i]
        lon = column_lon.values

    for j in madrid_stations[['lat']]:
        column_lat = madrid_stations[j]
        lat = column_lat.values

    for l in madrid_stations[['neighborhood']]:
        column_hood = madrid_stations[l]
        hood = column_hood.values

    for k in range(len(lon)):
        STATIONS['Station: ' + str(k+1)] = {'longitude': lon[k], 
                                            'latitude': lat[k], 
                                            'neighbourhood': hood[k]}

    return lon, lat, hood, STATIONS
