import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import countries from "../assets/countries.json";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

const Mappa = () => {
  // create custom icon
  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    // iconUrl: require("./icons/placeholder.png"),
    iconSize: [38, 38], // size of the icon
  });
  const createClusterCustomIcon = function (cluster) {
    return new divIcon({
      html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true),
    });
  };

  const [citta, setCitta] = useState([]); // 1

  let data = [];

  const getAllCitta = async () => {
    try {
      let response = await fetch("http://localhost:8080/api/sedi");
      if (response.ok) {
        data = await response.json();
        console.log("citta", data);
        setCitta(data);
      } else {
        console.log("errore nella chiamata");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("SONO COMPONENTDIDMOUNT()!");
    getAllCitta();
  }, []);

  return (
    <>
      <MapContainer center={[41.8719, 12.5674]} zoom={6} style={{ height: "500px", width: "700px" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />

        <MarkerClusterGroup chunkedLoading iconCreateFunction={createClusterCustomIcon}>
          {countries.map((marker) => (
            <Marker key={marker.id} position={[marker.lat, marker.long]} icon={customIcon}>
              <Popup>{marker.comune}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </>
  );
};

export default Mappa;
