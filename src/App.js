import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import storeConfig from "./redux/store";
import { ThemeProvider } from "@mui/material/styles";
import AppRouter from "./routes/index";
import { themes } from "./utils/theme";
import { ColorModeContext } from "./utils/context";
export default function App() {
  const { store, persistor } = storeConfig;
  const [theme, setTheme] = useState(themes[0]);
  const [mode, setMode] = React.useState("light");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        console.log("change color");
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  useEffect(() => {
    setTheme(mode === "light" ? themes[0] : themes[1]);
  }, [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={theme}>
            <AppRouter />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </ColorModeContext.Provider>
  );
}

// export default App;
