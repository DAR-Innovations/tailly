import React, { useState } from "react";
import { Marker } from "react-map-gl";
import "./mapMarkersList.css";
import MapPointIcon from "../../../assets/mapPoint.png";
import PetCard from "../../PetCard/PetCard";

const PetMapMarkersList = () => {
  const [selectedLocation, setSelectedLocation] = useState({});
  const testApiResponse = [
    {
      name: "Robert",
      age: "5",
      lastSeen: "Pushkine 11",
      description: "Pet clinic1",
      color: "brown",
      contacts: "-231314141",
      lat: 51.149798487605835,
      long: 71.36973155765898,
    },
    {
      name: "David",
      age: "2",
      lastSeen: "Pushkine 22",
      description: "Pet clinic2",
      color: "green",
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
            <PetCard info={res} onClose={setSelectedLocation} />
          ) : (
            false
          )}
        </div>
      ))}
    </div>
  );
};

export default PetMapMarkersList;
