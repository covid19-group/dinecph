import { GoogleMap, LoadScriptNext, Marker } from '@react-google-maps/api'

export default () => {
  return (
    <LoadScriptNext googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerClassName="h-full rounded"
        zoom={12}
        center={{
          lat: 55.6820377,
          lng: 12.5559868,
        }}
      >
        <Marker
          position={{
            lat: 55.6820377,
            lng: 12.5559868,
          }}
        />
      </GoogleMap>
    </LoadScriptNext>
  )
}
