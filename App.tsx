import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "@routes/index";
import { fetchFonts } from "@shared/helpers";
import { Provider } from "react-redux";
import store from "@store/index";

const App: React.FC = () => {
  const [fontLoaded, setFontLoaded] = useState<boolean>(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={() => console.log("Error on fetching fonts!")}
      />
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
