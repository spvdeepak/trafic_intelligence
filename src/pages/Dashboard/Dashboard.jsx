import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'leaflet';

const Dashboard = () => {
    const [userLatitude, setUserLatitude] = useState(null);
    const [userLongitude, setUserLongitude] = useState(null);
    // const [destinationLatitude, setDestinationLatitude] = useState(null);
    // const [destinationLongitude, setDestinationLongitude] = useState(null);
    // const [map, setMap] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setUserLatitude(position.coords.latitude);
                setUserLongitude(position.coords.longitude);
            }, (error) => {
                console.error('Error getting location:', error);
            });
        } else {
            console.warn('Geolocation is not supported by this browser.');
        }

        // const initialPosition = [userLatitude || 51.505, -0.09]; // Default to London if no geolocation
        // const leafletMap = new L.map('map').setView(initialPosition, 13);
        // setMap(leafletMap);

        // const attribution =
        //     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
        // const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        // const tiles = new L.tileLayer(tileUrl, { attribution });
        // tiles.addTo(leafletMap);

        // // Handle user click on map to set destination
        // leafletMap.on('click', (e) => {
        //     const { lat, lng } = e.latlng;
        //     setDestinationLatitude(lat);
        //     setDestinationLongitude(lng);
        // });
    }, []);

    return (
        <div>
            {/* <MapContainer center={[userLatitude || 51.505, -0.09]} zoom={13} whenCreated={setMap} style={{ height: '300px' }} id="map">
                <TileLayer attribution="" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {userLatitude && userLongitude && (
                    <Marker position={[userLatitude, userLongitude]}>
                        <Popup>Your Location</Popup>
                    </Marker>
                )}
            </MapContainer> */}
            <input type="text" name="latitude" value={userLatitude} />
            <input type="text" name="longitude" value={userLongitude} />
            {/* <input type="text" name="destination_latitude" value={destinationLatitude} />
            <input type="text" name="destination_longitude" value={destinationLongitude} /> */}
        </div>
    );
}
export default Dashboard;