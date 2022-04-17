import React, { useState } from "react";
import "./facilitiesStyle.css";
import ReactMapGL from "react-map-gl";
import { defaultCenterCoord } from "./centerCoord";
import Navbar from "../../components/Navbar/Navbar";
import "mapbox-gl/dist/mapbox-gl.css";
import ServiceMapMarkersList from "../../components/MapMarkersList/ServiceMarkers/MapMarkersList";

const FacilitiesPage = () => {
  const MAP_TOKEN = process.env.REACT_APP_MAP_TOKEN;
  const MAP_STYLE = process.env.REACT_APP_MAP_STYLE;

  const defaultCenter = defaultCenterCoord;

  const [viewPort, setViewPort] = useState({
    width: "100%",
    height: "100%",
    longitude: defaultCenter.long,
    latitude: defaultCenter.lat,
    zoom: 11.5,
  });

  return (
    <div className="mapPage">
      <Navbar />
      <ReactMapGL
        {...viewPort}
        mapStyle={MAP_STYLE}
        mapboxAccessToken={MAP_TOKEN}
        onMove={evt => setViewPort(evt.viewState)}
        className="map"
      >
        <ServiceMapMarkersList />
      </ReactMapGL>
    </div>
  );
};

export default FacilitiesPage;
