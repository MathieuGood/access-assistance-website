import React from "react"
import { MapContainer, TileLayer, GeoJSON, CircleMarker, Tooltip } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import basRhinBorder from "./mapBasRhin.json"
import { Direction } from "leaflet"

interface City {
	name: string
	lat: number
	lng: number
	image?: string
	tooltipDirection: Direction
}

const cities: City[] = [
	{ name: "Strasbourg", lat: 48.5734, lng: 7.7521, tooltipDirection: "right" },
	{
		name: "Wasselonne",
		lat: 48.6237,
		lng: 7.4282,
		image: "/images/access-assistance-logo-vector.svg",
		tooltipDirection: "top"
	},
	{
		name: "Hoerdt",
		lat: 48.6848,
		lng: 7.8034,
		image: "/images/partners/laco.png",
		tooltipDirection: "top"
	},
	{
		name: "Fegersheim",
		lat: 48.4962,
		lng: 7.6902,
		image: "/images/partners/orapi.webp",
		tooltipDirection: "bottom"
	}
]

const MapWithCities: React.FC = () => {
	return (
		<MapContainer
			style={{
				height: "300px",
				width: "100%",
				backgroundColor: "#FAFCE5"
			}}
			center={[48.6237, 7.4282]}
			zoom={8}
			zoomControl={false}
			scrollWheelZoom={false}
			doubleClickZoom={false}
			touchZoom={false}
			dragging={false}
			keyboard={false}
			attributionControl={false}>
			<TileLayer url="" />

			<GeoJSON
				data={basRhinBorder as unknown as GeoJSON.FeatureCollection}
				style={{ color: "#d0e322", weight: 3 }}
			/>

			{/* Markers for cities */}
			{cities.map(city => (
				<CircleMarker
					key={city.name}
					center={[city.lat, city.lng]}
					radius={3}
					fillColor="red"
					color="red"
					fillOpacity={1}>
					<Tooltip permanent key={city.name} direction={city.tooltipDirection}>
						{city.image && <img src={city.image} className="w-36 object-contain" />}
						<strong>{city.name}</strong>
					</Tooltip>{" "}
				</CircleMarker>
			))}
		</MapContainer>
	)
}

export default MapWithCities
