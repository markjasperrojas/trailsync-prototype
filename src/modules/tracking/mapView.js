import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { trekRoute } from '../../data/trackingData.js'

let map

export function initializeTrackingMap(routeIndex) {
  if (map) map.remove()
  const container = document.querySelector('#tracking-map')
  if (!container) return

  map = L.map(container, { zoomControl: false, scrollWheelZoom: false })
  L.control.zoom({ position: 'bottomright' }).addTo(map)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 18,
  }).addTo(map)

  const coordinates = trekRoute.map(({ lat, lng }) => [lat, lng])
  L.polyline(coordinates, { color: '#8cbf59', weight: 6, opacity: 0.9 }).addTo(map)
  L.polyline(coordinates.slice(0, routeIndex + 1), { color: '#1f5639', weight: 6 }).addTo(map)

  const tourist = trekRoute[routeIndex]
  const guide = trekRoute[Math.min(routeIndex + 1, trekRoute.length - 1)]
  L.circleMarker([tourist.lat, tourist.lng], { radius: 9, color: '#ffffff', weight: 3, fillColor: '#1f5639', fillOpacity: 1 }).bindTooltip('Maria · Trekker', { direction: 'top' }).addTo(map)
  L.circleMarker([guide.lat, guide.lng], { radius: 8, color: '#ffffff', weight: 3, fillColor: '#b87918', fillOpacity: 1 }).bindTooltip('Elena · Guide', { direction: 'top' }).addTo(map)
  L.circleMarker(coordinates.at(-1), { radius: 6, color: '#ffffff', weight: 2, fillColor: '#73ad4a', fillOpacity: 1 }).bindTooltip('Summit', { direction: 'top' }).addTo(map)
  map.fitBounds(L.latLngBounds(coordinates).pad(0.25))
}
