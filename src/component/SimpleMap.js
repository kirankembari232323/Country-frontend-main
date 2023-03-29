import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import axios from "axios"
import Loader from "./Loader"

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 53.478062,
      lng: -2.244666,
    },
    zoom: 0.5,
  };

  state = {
    locations: [],
    isLoading: true
  }

  componentDidMount() {
    axios
      .get(`https://country-back.herokuapp.com/api/locations`)
      .then(({ data }) => {
        this.setState({ locations: data, isLoading: false });
      });
  }
  render() {
    const { locations, isLoading } = this.state
    if(isLoading) return <Loader/>
    return (
      <div className="map" style = {{ height: "90vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys = {{ key: "AIzaSyA_uga0gi30JufOft32qIDYAb8HAxcTdAY" }}
          defaultCenter = {this.props.center}
          defaultZoom = {this.props.zoom}
        >
          {locations.map((location) => {
            return (
              <Marker
                key = {location._id}
                lat = {location.lat}
                lng = {location.lng}
                name = {location.description}
                color = {location.color}
              />
            );
          })}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
