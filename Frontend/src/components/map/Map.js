import { useState, useCallback } from "react";
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

const apiKey = "AIzaSyDKm-AfnleaypOv__Thngeqit7bznCbWGk";

export function Map({ coordinates, data, setClick }) {
  const [markers, setMarkers] = useState([]);

  const onMapClick = useCallback((event) => {
    setMarkers((current) => [
      ...current,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      },
    ]);
  }, []);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries,
  });

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={coordinates}
        options={options}
        onClick={onMapClick}
      >
        {data.map((marker, i) =>
          Number(marker.bookings) > 8 ? (
            <Marker
              key={i}
              position={{ lat: Number(marker.lat), lng: Number(marker.lng) }}
              icon="http://maps.google.com/mapfiles/ms/icons/red-dot.png"
              onClick={() => setClick(i)}
            />
          ) : (
            <Marker
              key={i}
              position={{ lat: Number(marker.lat), lng: Number(marker.lng) }}
              icon="http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
              onClick={() => setClick(i)}
            />
          )
        )}
      </GoogleMap>
    </>
  );
}
