import React, { useEffect } from "react"
import { Direction, PointExpression } from "leaflet"
import { MapContainer, TileLayer, GeoJSON, CircleMarker, Tooltip } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import basRhinBorder from "./mapBasRhin.json"
import data from "../../data/contentData.json"

interface City {
	name: string
	lat: number
	lng: number
	image?: string
	tooltipDirection: Direction
}

const MapWithCities: React.FC = () => {
	const { mapCities } = data as { mapCities: City[] }
	const [, setTooltipsReady] = React.useState(false)
	const toolTipPxOffset = 5

	const getTooltipOffset = (direction: Direction): PointExpression => {
		switch (direction) {
			case "top":
				return [0, -toolTipPxOffset]
			case "right":
				return [toolTipPxOffset, 0]
			case "bottom":
				return [0, toolTipPxOffset]
			case "left":
				return [-toolTipPxOffset, 0]
			default:
				return [0, 0]
		}
	}

	useEffect(() => {
		// Delay tooltip rendering to allow the map to stabilize and avoid misplaced tooltips
		const timeout = setTimeout(() => setTooltipsReady(true), 100)
		return () => clearTimeout(timeout)
	}, [])

	return (
		<MapContainer
			style={{
				height: "280px",
				width: "100%",
				backgroundColor: "#FFFFFF"
			}}
			center={[48.6, 7.59]}
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
				style={{
					color: "#d0e322",
					weight: 3
				}}
			/>

			{mapCities.map(city => (
				<CircleMarker
					key={city.name}
					center={[city.lat, city.lng]}
					radius={3}
					fillColor="red"
					color="red"
					fillOpacity={1}
					className="animate-pulse">
					<Tooltip
						permanent
						key={city.name}
						direction={city.tooltipDirection}
						offset={getTooltipOffset(city.tooltipDirection)}
						className="w-24 text-center">
						{city.image && (
							<img
								src={city.image}
								style={{
									maxHeight: "200px",
									width: "300px",
									display: "block",
									margin: "0 auto",
									objectFit: "contain",
									padding: "4px 0"
								}}
							/>
						)}
						<strong>{city.name}</strong>
					</Tooltip>{" "}
				</CircleMarker>
			))}
		</MapContainer>
	)
}

export default MapWithCities
