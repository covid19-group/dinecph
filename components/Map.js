import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  GoogleMap,
  LoadScriptNext,
  Marker,
  OverlayView,
} from '@react-google-maps/api'
import { X } from 'react-feather'

const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY

export default ({ pos }) => {
  const [tooltip, setTooltip] = useState(false)

  if (pos)
    return (
      <LoadScriptNext googleMapsApiKey={googleMapsApiKey}>
        <GoogleMap
          center={pos}
          clickableIcons={false}
          mapContainerClassName="h-full border border-sand"
          zoom={12}
        >
          <Tooltip tooltip={tooltip} setTooltip={setTooltip} />
          <Marker position={pos} onClick={() => setTooltip(pos)} />
        </GoogleMap>
      </LoadScriptNext>
    )
  return null
}

const Tooltip = ({ tooltip, setTooltip }) => (
  <AnimatePresence>
    {tooltip && (
      <OverlayView
        position={tooltip}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      >
        <motion.div
          initial={{ opacity: 0, y: -28 }}
          animate={{ opacity: 1, y: -36 }}
          exit={{ opacity: 0, y: -32 }}
          className="relative flex justify-center"
        >
          <div className="absolute bottom-0 w-80 font-inter font-inter-var bg-sand-light px-8 py-6">
            <button
              type="button"
              onClick={() => setTooltip(false)}
              className="absolute top-0 right-0 text-navy-light m-2"
            >
              <X className="text-lg" />
            </button>

            <h3 className="text-base mb-2">Tigermom</h3>
            <p className="text-xs mb-2">
              At Tigermom you'll get an internationally inspired meal made with
              local and organic ingredients.
            </p>
            <ul className="-m-1 mb-2">
              {['Food', 'Cocktails'].map(label => (
                <li
                  key={label}
                  className="inline-block font-medium bg-sand px-2 py-1 m-1"
                >
                  {label}
                </li>
              ))}
            </ul>
            <div className="mb-2">✓ Delivery available</div>
            <div className="mb-4">+45 5384 2525</div>
            <a
              href="http://tigermom.dk/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View and order&nbsp;&nbsp;&nbsp;⟶
            </a>

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
)
