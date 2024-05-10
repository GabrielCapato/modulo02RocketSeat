import { ThemeProvider } from "styled-components";
import theme from "./src/theme";
import { useFonts,Roboto_400Regular,Roboto_700Bold } from  '@expo-google-fonts/roboto'
import { StatusBar } from "react-native";
import { Loading } from "./src/components/Loading";
import { Routes } from "./src/routes";
import React from "react";


export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })


  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
      />
    {fontsLoaded ? <Routes/> : <Loading/> }
    </ThemeProvider>
  )
  
}

