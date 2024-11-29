import React from "react"
import { MapContainer, TileLayer, GeoJSON, CircleMarker, Tooltip } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import basRhinBorder from "../data/basRhinBorders.json"

const cityData = [
	{
		name: "Wasselonne",
		lat: 48.6237,
		lng: 7.4282,
		image: "/images/access-assistance-logo-vector.svg"
	},
	{ name: "Strasbourg", lat: 48.5734, lng: 7.7521, image: "" },
	{ name: "Laco Hoerdt", lat: 48.6848, lng: 7.8034, image: "/images/partners/laco.png" },
	{ name: "Orapi Fegersheim", lat: 48.4962, lng: 7.6902, image: "/images/partners/orapi.webp" }
]

const MapWithCities: React.FC = () => {
	return (
		<MapContainer
			style={{ height: "300px", width: "100%" }}
			center={[48.6237, 7.4282]}
			zoom={8}
			scrollWheelZoom={false}>
			<TileLayer url="" />

			<GeoJSON
				data={basRhinBorder as unknown as GeoJSON.FeatureCollection}
				style={{ color: "gray", weight: 2 }}
			/>

			{/* Markers for cities */}
			{cityData.map(city => (
				<CircleMarker
					key={city.name}
					center={[city.lat, city.lng]}
					radius={8}
					fillColor="red"
					color="red"
					fillOpacity={1}>
					<Tooltip permanent>
						<strong>{city.name}</strong>
					</Tooltip>
					{city.image !== "" ? (
						<Tooltip>
							<img src={city.image} alt={city.name} style={{ width: "100px" }} />
						</Tooltip>
					) : (
						""
					)}{" "}
				</CircleMarker>
			))}
		</MapContainer>
	)
}

export default MapWithCities
