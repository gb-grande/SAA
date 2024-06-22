import Map from "./Map.jsx";
import {GeoSearchControl, OpenStreetMapProvider} from "leaflet-geosearch";
import {useMap} from "react-leaflet";
import {useEffect} from "react";

function SearchControl({value, setValue}){
    const provider = new OpenStreetMapProvider({
        params: {
            countrycodes: ['br'],
            layer: ['address'],
        }
    });
    const map = useMap();

    useEffect(() => {
        //Register callback on address selection
        const locationCallback = e => {
            setValue({
                label: e.location.label,
                lat: e.location.y,
                lon: e.location.x
            });
            console.log("callback for", e.location);
        }
        map.on('geosearch/showlocation', locationCallback);

        //Add the search bar to the map
        const searchControl = new GeoSearchControl({
            provider: provider,
            style: 'bar',
            showMarker: true,
            searchLabel: 'Insira o endereço'
        });
        map.addControl(searchControl);

        //Cleanup callback and added control
        return () => {
            map.off('geosearch/showlocation', locationCallback);
            map.removeControl(searchControl);
        }
    }, [])

    return null;
}

function SelectionMap({value, setValue}) {
    const coords = value ? {defaultCoords: [value.lat, value.lon]} : {};
    return (
        <Map {...coords}>
            <SearchControl value={value} setValue={setValue}/>
        </Map>
    )
}

export default SelectionMap;