import React, { useState, useCallback } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import mapStyles from "./mapstyles";

const mapContainerStyle = {
  height: "100%",
  width: "100%",
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
};

const libraries = ["places"];

export function GogMap({ coordinates, data, setClick }) {
  const [markers, setMarkers] = useState([]);

  const onMapClick = useCallback((event) => {
    setMarkers((current) => [
      ...current,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        bookings: 0, // Set the bookings value for the new marker
      },
    ]);
  }, []);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDKm-AfnleaypOv__Thngeqit7bznCbWGk",
    libraries,
  });

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  // Add three green markers
  const additionalMarkers = [
    { lat: 12.909419729010159, lng: 77.56651218002517, bookings: 0 },
    { lat: 12.910873339373419, lng:  77.56495649893613, bookings: 0 },
    { lat: 12.902584410032402,  lng: 77.60982851070588, bookings: 0 },
  ];

  return (
    <>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={coordinates}
        options={options}
        onClick={onMapClick}
      >
        {markers.map((marker, i) => (
          <Marker
            key={i}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={
              Number(marker.bookings) > 8
                ? "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
                : "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
            }
            onClick={() => setClick(i)}
          />
        ))}

        {/* Additional green markers */}
        {additionalMarkers.map((marker, i) => (
          <Marker
            key={i + markers.length}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon="http://maps.google.com/mapfiles/ms/icons/green-dot.png "
            onClick={() => setClick(i)}
          />
        ))}
      </GoogleMap>
    </>
  );
}
