import React, { Component } from 'react';
// import { render } from 'react-dom';
// import MapGL from 'react-map-gl';
import ReactMapGL, { Popup, NavigationControl } from 'react-map-gl';
import { Marker } from 'react-map-gl';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MaterialIcon from '@material/react-material-icon';
import '../styles/project_card.css';
import Iframe from 'react-iframe'

const axios = require('axios').default;

const MAPBOX_TOKEN = 'pk.eyJ1IjoiY2hyaXNjaHJpczk2IiwiYSI6ImNrNXUzMTU5MDB0MTMzam53OWx4Nzk5M3MifQ.mrbIULr8DB0_bh6FJ8CMmg'; // Set your mapbox token here

class ProjectClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 40.416775,
                longitude: -3.703790,
                zoom: 10.4,
            },
            loading: true,
            error: "",
            data: null,
            showPopup: true,
        };
    }

    getStations = () => {
        this.setState({ loading: true });
        return axios
            .get('http://127.0.0.1:5000/stations')

            .then(result => {
                this.setState({
                    data: result.data,
                    loading: false,
                    error: false
                });
            })
            .catch(error => {
                console.error("error: ", error);
                this.setState({
                    // objects cannot be used as a react child
                    // -> <p>{error}</p> would throw otherwise
                    error: `${error}`,
                    loading: true
                });
            });
    }
    componentDidMount() {
        this.getStations();

    }
    
    render() {
        const { viewport } = this.state;
        const { showPopup } = this.state;
        if (this.state.data){
            const station_dict = this.state.data

            var indents_close = [];
            var indents_far = [];

            var popups_stat = [];

            const street_view = "https://www.google.com/maps/embed/v1/streetview?key=AIzaSyAum1aKEq0t6Q8BBf9ub8I9LcBtMJ_dKhc&location="
            const street_view_para = "&heading=210&pitch=10&fov=100"
            for (const [key, value] of Object.entries(station_dict)) {
                var streeturl = street_view.concat(String(value["latitude"]), ',', String(value["longitude"]),street_view_para)
                indents_close.push(
                    <Marker latitude={value["latitude"]} longitude={value["longitude"]} offsetLeft={-20} offsetTop={-10}>
                        <MaterialIcon className='sensor_icons' icon='where_to_vote' />
                        <p id="station_marker">{key}</p>
                    </Marker>
                )
                indents_far.push(
                    <Marker latitude={value["latitude"]} longitude={value["longitude"]} offsetLeft={-20} offsetTop={-10}>
                        <MaterialIcon className='sensor_icons' icon='where_to_vote' />
                    </Marker>
                )
  

                

                popups_stat.push(
                        <Popup
                            latitude={value["latitude"]}
                            longitude={value["longitude"]}
                            closeButton={false}
                            closeOnClick={false}
                            onClose={() => this.setState({ showPopup: false })}
                            anchor="top"
                            dynamicPosition={false}>
                            <div>
                            <Iframe 
                                src={streeturl} 
                                width="450px"
                                height="200px"
                                display="initial"
                                position="relative" />
                            <div className="popnames">{value["neighbourhood"]}</div>
                            </div>
                        </Popup>

                )

            }


            if (this.state.viewport.zoom <= 8.3) {
                return (
                    <ReactMapGL {...viewport}
                        width="100%"
                        height="100vh"
                        captureScroll='true'
                        showZoom='true'
                        mapboxApiAccessToken={MAPBOX_TOKEN}
                        mapStyle="mapbox://styles/mapbox/dark-v9"
                        onViewportChange={viewport => this.setState({ viewport })}>
                        {indents_far[8]}

                        <div style={{ position: 'absolute', right: 0 }}>
                            <NavigationControl />
                        </div>
                        {console.log(this.state.viewport.zoom)}

                    </ReactMapGL>
                );
            }

            if (this.state.viewport.zoom <= 10.3){
                return (
                    <ReactMapGL {...viewport}
                        width="100%"
                        height="100vh"
                        captureScroll='true'
                        showZoom='true'
                        mapboxApiAccessToken={MAPBOX_TOKEN}
                        mapStyle="mapbox://styles/mapbox/dark-v9"
                        onViewportChange={viewport => this.setState({ viewport })}>
                        {indents_far}
                        <div style={{ position: 'absolute', right: 0 }}>
                            <NavigationControl />
                        </div>
                        {console.log(this.state.viewport.zoom)}

                    </ReactMapGL>
                );
            }

            if (this.state.viewport.zoom > 10.3) {
            return (
                <ReactMapGL {...viewport}
                    width="100%"
                    height="100vh"
                    captureScroll='true'
                    showZoom='true'
                    mapboxApiAccessToken={MAPBOX_TOKEN}
                    mapStyle="mapbox://styles/mapbox/dark-v9"
                    onViewportChange={viewport => this.setState({ viewport })}>
                    {indents_close}
                    <div style={{ position: 'absolute', right: 0 }}>
                        <NavigationControl />
                    </div>
                        {showPopup && popups_stat}
                    {console.log(this.state.viewport.zoom)}

                </ReactMapGL>
            );
            }
        } else {
            return (
                <ReactMapGL {...viewport}
                    width="100%"
                    height="100vh"
                    captureScroll='true'
                    showZoom='true'
                    mapboxApiAccessToken={MAPBOX_TOKEN}
                    mapStyle="mapbox://styles/mapbox/dark-v9"
                    onViewportChange={viewport => this.setState({ viewport })}>
                   
                    <div style={{ position: 'absolute', right: 0 }}>
                        <NavigationControl />
                    </div>
                </ReactMapGL>
            );
        }


    }
}

document.body.style.margin = 0;
export default ProjectClass








