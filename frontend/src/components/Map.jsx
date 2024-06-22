import {MapContainer, Marker, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css"

function Map({defaultCoords = [-23.0881, -47.208], defaultZoom = 40, containerStyle = {height: '400px'}, children, ...others}){
    return (
        <MapContainer
            center={defaultCoords} zoom={defaultZoom}
            style={containerStyle}
            {...others}
        >
            <Marker position={defaultCoords}/>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {children}
        </MapContainer>
    );
}
export default Map;