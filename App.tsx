import { ThemeProvider } from "styled-components";
import { Players } from "./src/screens/Players";
import theme from "./src/theme";
import { useFonts,Roboto_400Regular,Roboto_700Bold } from  '@expo-google-fonts/roboto'
import { ActivityIndicator, StatusBar } from "react-native";
import { Loading } from "./src/components/Loading";


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
    {fontsLoaded ? <Players/> : <Loading/> }
    </ThemeProvider>
  )
  
}

