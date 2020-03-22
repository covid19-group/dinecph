import { useState, createContext, useContext } from 'react'

const languages = {
  'en-GB': 'Switch to English',
  'da-DK': 'Vis på dansk',
}

export const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en-GB')
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default function LanguageSelector() {
  const { language, setLanguage } = useContext(LanguageContext)
  const opposite = Object.keys(languages).filter(i18n => i18n !== language)[0]
  const label = languages[opposite]
  return (
    <LanguageProvider>
      <div className="relative inline-block text-left ml-4">
        <div onClick={() => setLanguage(opposite)}>
          <button className="text-left inline-flex justify-center flex-shrink-0 px-2 py-2 leading-5 font-medium transition ease-in-out duration-150">
            {label}
          </button>
        </div>
      </div>
    </LanguageProvider>
  )
}
