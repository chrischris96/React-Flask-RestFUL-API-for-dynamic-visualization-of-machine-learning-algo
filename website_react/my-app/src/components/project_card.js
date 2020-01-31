import React, { Component } from 'react';
// import { render } from 'react-dom';
// import MapGL from 'react-map-gl';
import ReactMapGL, { NavigationControl} from 'react-map-gl';
import { Marker } from 'react-map-gl';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MaterialIcon from '@material/react-material-icon';
import '../styles/project_card.css';

const axios = require('axios').default;


    

const MAPBOX_TOKEN = 'pk.eyJ1IjoiY2hyaXNjaHJpczk2IiwiYSI6ImNrNXUzMTU5MDB0MTMzam53OWx4Nzk5M3MifQ.mrbIULr8DB0_bh6FJ8CMmg'; // Set your mapbox token here

class ProjectClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 40.416775,
                longitude: -3.703790,
                zoom: 12,
                bearing: 0,
                pitch: 0
            },
            loading: true,
            error: "",
            data: null
        };
    }

    getStations = () => {
        this.setState({ loading: true });
        return axios
            .get('http://127.0.0.1:5000/stations')

            .then(result => {
                console.log(result);
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
                    loading: false
                });
            });
    }
    componentDidMount() {
        this.getStations();
    }
    
    render() {
        const { viewport } = this.state;
        
        console.log(this.state.data)
        if (this.state.data){
            const station_dict = this.state.data
            console.log(station_dict["station0"] )

            var indents = [];

            for (const [key, value] of Object.entries(station_dict)) {
                console.log(key,value);
                console.log(value["latitude"], value["longitude"]);
                
                indents.push(
                    <Marker latitude={value["latitude"]} longitude={value["longitude"]} offsetLeft={-20} offsetTop={-10}>
                        <MaterialIcon className='sensor_icons' icon='where_to_vote' />
                        <p id="station_marker">{key}</p>
                    </Marker>
                )

            }

            return (
                <ReactMapGL {...viewport}
                    width="100%"
                    height="100vh"
                    captureScroll='true'
                    showZoom='true'
                    mapboxApiAccessToken={MAPBOX_TOKEN}
                    mapStyle="mapbox://styles/mapbox/dark-v9"
                    onViewportChange={viewport => this.setState({ viewport })}>
                    {indents}
                    <div style={{ position: 'absolute', right: 0 }}>
                        <NavigationControl />
                    </div>
                </ReactMapGL>
            );
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








