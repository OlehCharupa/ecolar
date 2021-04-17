import React, { Component } from 'react';
// import styles from './MapGoogle.module.css'
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapGoogle extends Component {
    render() {
        const style = {
            width: '100%',
            height: '100%'
        }
        const containerStyle = {
            position: 'relative',
            width: '100%',
            height: '100%'
        }
        return (
            <Map
                google={this.props.google}
                zoom={17}
                // style={style}
                containerStyle={containerStyle}
                initialCenter={{ lat: 50.430889666863564, lng: 30.47317272710909 }}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAvnwbw6Mrhpmoe8DV3_WlcSXCP91WcgmI'
})(MapGoogle);






