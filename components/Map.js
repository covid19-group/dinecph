import { useEffect, useState } from 'react'
import { GoogleMap, LoadScriptNext, Marker } from '@react-google-maps/api'

export default () => {
  const [pos, setPos] = useState()

  const getPos = () => {
    fetch(
      'https://maps.googleapis.com/maps/api/geocode/json?address=' +
        'Kleinsgade 6' +
        '&key=' +
        process.env.GOOGLE_MAPS_API_KEY
    )
      .then(res => res.json())
      .then(res => {
        setPos(res.results[0].geometry.location)
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect(() => {
    getPos()
  }, [])
  if (pos)
    return (
      <LoadScriptNext googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerClassName="h-full rounded"
          zoom={12}
          center={pos}
        >
          <Marker position={pos} />
        </GoogleMap>
      </LoadScriptNext>
    )
  return null
}
