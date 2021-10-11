import React, { useEffect, useState } from 'react'
import { Provider, useSelector } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import storeConfig from './redux/store'
import { ThemeProvider } from '@mui/material/styles'
import AppRouter from './routes/index'
import { themes } from './utils/theme'
import { ColorModeContext } from './utils/context'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'
import englishTranslation from './translations/en.json'
import frenchTranslation from './translations/fr.json'

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      translations: englishTranslation
    },
    fr: {
      translations: frenchTranslation
    }
  }
})

const LanguageWrapper = () => {
  const language = useSelector(state => state.settings.language)
 
  useEffect(()=>{
    i18next.changeLanguage(language);
  },[language])
  
  return <I18nextProvider i18n={i18next}>
            <AppRouter />
          </I18nextProvider>
}

export default function App () {
  const { store, persistor } = storeConfig
  const [theme, setTheme] = useState(themes[0])
  const [mode, setMode] = React.useState('light')

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        console.log('change color')
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      }
    }),
    []
  )

  useEffect(() => {
    setTheme(mode === 'light' ? themes[0] : themes[1])
  }, [mode])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={theme}>
            <LanguageWrapper/>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </ColorModeContext.Provider>
  )
}
