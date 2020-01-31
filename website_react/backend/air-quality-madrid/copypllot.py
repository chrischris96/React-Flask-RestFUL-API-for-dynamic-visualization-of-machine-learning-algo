# -*- coding: utf-8 -*-
"""
Created on Sat Oct 20 14:15:56 2018

@author: Chris
"""

path = r'C:\Users\Chris\Desktop\Machine Learning Raw Data\air-quality-madrid\stations.csv'
stations = pd.read_csv(path)
stations.head()

geometry = [Point(xy) for xy in zip(stations['lon'], stations['lat'])]
crs = {'init': 'epsg:4326'}
geoDF_stations = gpd.GeoDataFrame(stations, crs=crs, geometry=geometry)
geoDF_stations_new = geoDF_stations.to_crs({'init': 'epsg:25830'}) 
#geoDF_stations.head()
# Plot all points
#geoDF_stations.plot(marker='co', color='r', markersize=10.0)
streetsystem = gpd.read_file('C:/Users/Chris/Desktop/Machine Learning Raw Data/900BTQKCJT/call2016.shp')
#streetsystem.plot(color='green', markersize=5);
#geoDF_stations.crs = {'init' :'epsg:4326'}

# you could shorten it to a one-liner, but it's a lot less readable:
#streetsystem = LineString(zip(*convert_etrs89_to_lonlat(*zip(*streetsaslinestring.coords))))

base = geoDF_stations_new.plot(color='white', edgecolor='red',markersize=100.0) 
streetsystem.plot(ax=base, color='blue',markersize=0.1)