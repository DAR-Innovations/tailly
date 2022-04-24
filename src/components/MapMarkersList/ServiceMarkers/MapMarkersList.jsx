import React, { useState } from "react";
import { Marker } from "react-map-gl";
import "./mapMarkersList.css";
import MapPointIcon from "../../../assets/mapPoint.png";
import ServiceCard from "../../ServiceCard/ServiceCard";
import useFetchServicesData from "../../Hooks/useFetchServicesData";

const ServiceMapMarkersList = () => {
  const [selectedLocation, setSelectedLocation] = useState(false);
  const servicesData = useFetchServicesData();
  return (
    <div>
      {servicesData?.map(result => (
        <div key={result?.serviceLongitude}>
          <Marker
            longitude={result?.serviceLongitude}
            latitude={result?.serviceLatitude}
          >
            <img
              src={MapPointIcon}
              alt="point"
              className="markerIcon"
              onClick={() => setSelectedLocation(result)}
            />
          </Marker>
          {selectedLocation.serviceLongitude === result.serviceLongitude ? (
            <ServiceCard info={result} onClose={setSelectedLocation} />
          ) : (
            false
          )}
        </div>
      ))}
    </div>
  );
};

export default ServiceMapMarkersList;
