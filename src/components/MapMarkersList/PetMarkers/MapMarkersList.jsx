import React, { useState } from "react";
import { Marker } from "react-map-gl";
import "./mapMarkersList.css";
import MapPointIcon from "../../../assets/mapPoint.png";
import PetCard from "../../PetCard/PetCard";
import useFetchPetsData from "../../Hooks/useFetchPetsData";

const PetMapMarkersList = () => {
  const [selectedLocation, setSelectedLocation] = useState({});
  const petsData = useFetchPetsData();
  return (
    <div>
      {petsData?.map(result => (
        <div key={result?.petLongitude}>
          <Marker
            longitude={result?.petLongitude}
            latitude={result?.petLatitude}
          >
            <img
              src={MapPointIcon}
              alt="point"
              className="markerIcon"
              onClick={() => setSelectedLocation(result)}
            />
          </Marker>
          {selectedLocation?.petLongitude === result?.petLongitude ? (
            <PetCard info={result} onClose={setSelectedLocation} />
          ) : (
            false
          )}
        </div>
      ))}
    </div>
  );
};

export default PetMapMarkersList;
