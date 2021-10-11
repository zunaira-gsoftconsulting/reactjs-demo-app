import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import storeConfig from './redux/store'
import { ThemeProvider } from '@mui/material/styles'
import AppRouter from './routes/index'
import { themes } from './utils/theme'
function App () {
  const { store, persistor } = storeConfig
  const [theme, setTheme] = useState(themes[0])
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <AppRouter />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App



