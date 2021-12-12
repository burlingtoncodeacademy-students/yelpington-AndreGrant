import { MapContainer, TileLayer, Marker } from "react-leaflet";
// import { Link } from "react-router-dom";
// import L from "react-leaflet";

function Map(props) {
  let lidos = [40.901265, -74.041727];
  let manna = [40.88918486330172, -74.03845076689531];
  let macs = [40.88797235318213, -74.050025032838];
  let maggs = [40.90761727901807, -74.030657121954];
  let picco = [40.88835728262767, -74.05539735212474];
  let noches = [40.89047813879016, -74.03939011026318];
  let chit = [40.88670810132261, -74.0643679957975];
  let veggie = [40.8895522441428, -74.02260247758349];

  return (
    <div id="map">
      <MapContainer
        center={[40.885933, -74.043474]}
        zoom={14}
        style={{ height: "600px", width: "600px" }}
        scrollWheelZoom={false}
        dragging={false}
        doubleClickZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={lidos}></Marker>
        <Marker position={manna}></Marker>
        <Marker position={macs}></Marker>
        <Marker position={picco}></Marker>
        <Marker position={noches}></Marker>
        <Marker position={maggs}></Marker>
        <Marker position={chit}></Marker>
        <Marker position={veggie}></Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
