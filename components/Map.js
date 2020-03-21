import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  GoogleMap,
  LoadScriptNext,
  Marker,
  OverlayView,
} from '@react-google-maps/api'
import { X } from 'react-feather'

export default () => {
  const [overlay, setOverlay] = useState(false)
  const [pos, setPos] = useState({})

  const getPos = () => {
    fetch(
      'https://maps.googleapis.com/maps/api/geocode/json?address=' +
        'Kleinsgade 6, 1633, København V' +
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
        <GoogleMap mapContainerClassName="h-full" zoom={12} center={pos}>
          <AnimatePresence>
            {overlay && (
              <OverlayView
                position={overlay}
                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
              >
                <motion.div
                  initial={{ opacity: 0, y: -28 }}
                  animate={{ opacity: 1, y: -36 }}
                  exit={{ opacity: 0, y: -32 }}
                  className="relative flex justify-center"
                >
                  <div className="absolute bottom-0 bg-sand-light px-32 py-16">
                    <button
                      type="button"
                      onClick={() => setOverlay(false)}
                      className="absolute top-0 right-0 text-navy-light m-2"
                    >
                      <X className="text-base" />
                    </button>
                    <div className="absolute inset-x-0 bottom-0 flex justify-center">
                      <div
                        style={{ transform: 'rotate(45deg)' }}
                        className="bg-sand-light p-2 -mb-1"
                      />
                    </div>
                  </div>
                </motion.div>
              </OverlayView>
            )}
          </AnimatePresence>
          <Marker position={pos} onClick={() => setOverlay(pos)} />
        </GoogleMap>
      </LoadScriptNext>
    )
  return null
}
