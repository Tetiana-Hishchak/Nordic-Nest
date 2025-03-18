import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useRef } from "react";
import { button, buttonContainer } from "./map.style";
const MapControls = () => {
    const map = useMap();
    return (_jsxs("div", { className: buttonContainer, children: [_jsx("button", { className: button, onClick: () => map.setZoom(map.getZoom() + 1), children: "+" }), _jsx("button", { className: button, onClick: () => map.setZoom(map.getZoom() - 1), children: "-" })] }));
};
const MyMap = () => {
    const mapRef = useRef(null);
    return (_jsxs(MapContainer, { center: [41.4026, 2.2176], zoom: 13, style: { height: "400px", width: "100%" }, zoomControl: false, ref: mapRef, children: [_jsx(TileLayer, { url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" }), _jsx(Marker, { position: [41.4026, 2.2176], children: _jsx(Popup, { children: "\u0426\u0435 \u0411\u0430\u0440\u0441\u0435\u043B\u043E\u043D\u0430! Passeig de Garcia F\u00E0ria, 81" }) }), _jsx(MapControls, {})] }));
};
export default MyMap;
