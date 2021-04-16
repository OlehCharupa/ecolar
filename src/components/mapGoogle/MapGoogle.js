import React, { Component } from 'react';
import styles from './MapGoogle.module.css'
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapGoogle extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={17}
                style={{ width: '50%', height: '50%', position: 'relative' }}
                // className={styles.map}
                initialCenter={{ lat: 50.430889666863564, lng: 30.47317272710909 }}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAvnwbw6Mrhpmoe8DV3_WlcSXCP91WcgmI'
})(MapGoogle);






