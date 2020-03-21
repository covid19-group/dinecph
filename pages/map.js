import { GoogleMap, LoadScriptNext, Marker } from '@react-google-maps/api'

import Head from '../components/Head'
import Nav from '../components/Nav'
import LoadingSpinner from '../components/LoadingSpinner'

export default () => (
  <>
    <Head />
    <div className="h-screen flex flex-col">
      <Nav />
      <main className="flex-auto px-3 pb-3">
        <LoadScriptNext googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerClassName="h-full rounded"
            zoom={11}
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
      </main>
    </div>
  </>
)
