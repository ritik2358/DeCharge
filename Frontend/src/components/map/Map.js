import { useState, useCallback } from "react";
import {
    GoogleMap,
    useLoadScript,
    MarkerF
} from "@react-google-maps/api";

import mapStyles from "./mapstyles";

const mapContainerStyle = {
    height: "100%",
    width: "100%",
};


const options = {
    styles: mapStyles,
    disableDefaultUI: true
}



const libraries = ["places"];

export function Map({ coordinates, data, setClick }) {
    const [setMarkers] = useState([])
    const onMapClick = useCallback(
        (event) => {
            setMarkers(current => [...current,
            {
                lat: event.latLng.lat(),
                lng: event.latLng.lng()
            }])
        }, [setMarkers]
    )
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: `AIzaSyDKm-AfnleaypOv__Thngeqit7bznCbWGk`,
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
                {/* <Marker position={{ lat: markers.lat , lng:markers.lng}} />  */}
                {/* {markers.map(marker => console.log(marker))} */}
                {data.map((marker, i) =>
                    Number(marker.bookings) > 8 ?
                        <MarkerF position={{ lat: Number(marker.lat), lng: Number(marker.lng) }} icon="http://maps.google.com/mapfiles/ms/icons/red-dot.png" onClick={() => setClick(i)} />
                        :
                        <MarkerF position={{ lat: Number(marker.lat), lng: Number(marker.lng) }} icon="http://maps.google.com/mapfiles/ms/icons/blue-dot.png" onClick={() => setClick(i)} />

                )}
            </GoogleMap>
        </>
    );
}