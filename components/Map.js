import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  GoogleMap,
  LoadScriptNext,
  Marker,
  OverlayView,
} from '@react-google-maps/api'
import { X } from 'react-feather'

import LoadingSpinner from './LoadingSpinner'

const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY

export default ({ restaurants }) => {
  const [tooltip, setTooltip] = useState(false)
  const [copenhagen] = useState({
    lat: 55.6820377,
    lng: 12.5559868,
  })

  if (restaurants)
    return (
      <LoadScriptNext googleMapsApiKey={googleMapsApiKey}>
        <GoogleMap
          center={copenhagen}
          clickableIcons={false}
          mapContainerClassName="h-full border border-sand"
          zoom={12}
        >
          <Tooltip tooltip={tooltip} setTooltip={setTooltip} />
          {restaurants.map(restaurant => {
            const position =
              restaurant.positionData.results[0].geometry.location
            const display =
              process.env.NODE_ENV === 'production'
                ? restaurant.display || false
                : true
            if (display)
              return (
                <Marker
                  position={position}
                  onClick={() => setTooltip(restaurant)}
                />
              )
            return null
          })}
        </GoogleMap>
      </LoadScriptNext>
    )
  return (
    <div className="w-full h-full flex items-center justify-center text-3xl text-pink">
      <LoadingSpinner />
    </div>
  )
}

const Tooltip = ({ tooltip, setTooltip }) => {
  const name = tooltip.name || undefined
  const description = tooltip.description || undefined
  const offerings = tooltip.offerings || undefined
  const delivery = tooltip.delivery || false
  const phone = tooltip.phone || undefined
  const url = tooltip.url || undefined
  const position = tooltip && tooltip.positionData.results[0].geometry.location
  return (
    <AnimatePresence>
      {tooltip && (
        <OverlayView
          position={position}
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

              {name && <h3 className="text-base mb-2">{name}</h3>}
              {description && <p className="text-xs mb-3">{description}</p>}
              {offerings && !!offerings.length && (
                <ul className="-m-1 mb-2">
                  {offerings.map(label => (
                    <li
                      key={label}
                      className="inline-block font-medium bg-sand px-2 py-1 m-1"
                    >
                      {label}
                    </li>
                  ))}
                </ul>
              )}
              {delivery && <div className="mb-2">✓ Delivery available</div>}
              {phone && <div className="mb-4">{phone}</div>}
              {url && (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View and order&nbsp;&nbsp;&nbsp;⟶
                </a>
              )}

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
}
