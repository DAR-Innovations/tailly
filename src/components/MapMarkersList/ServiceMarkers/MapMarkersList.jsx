import React, { useState } from "react";
import { Marker } from "react-map-gl";
import "./mapMarkersList.css";
import MapPointIcon from "../../../assets/mapPoint.png";
import ServiceCard from "../../ServiceCard/ServiceCard";

const ServiceMapMarkersList = () => {
  const [selectedLocation, setSelectedLocation] = useState({});
  const testApiResponse = [
    {
      name: "Clinic1",
      adress: "Pushkine 11",
      description: "Pet clinic1",
      contacts: "-231314141",
      lat: 51.149798487605835,
      long: 71.36973155765898,
    },
    {
      name: "Clinic2",
      adress: "Pushkine 22",
      description: "Pet clinic2",
      contacts: "-231314141",
      lat: 51.17918932223693,
      long: 71.42610683897189,
    },
  ];
  return (
    <div>
      {testApiResponse.map(res => (
        <div key={res.long}>
          <Marker longitude={res.long} latitude={res.lat}>
            <img
              src={MapPointIcon}
              alt="point"
              className="markerIcon"
              onClick={() => setSelectedLocation(res)}
            />
          </Marker>
          {selectedLocation.long === res.long ? (
            <ServiceCard info={res} onClose={setSelectedLocation} />
          ) : (
            false
          )}
        </div>
      ))}
    </div>
  );
};

export default ServiceMapMarkersList;
