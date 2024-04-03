import "@/styles/global.css";

import { Slot } from "expo-router";

import {
  useFonts,
  Roboto_700Bold,
  Roboto_500Medium,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";

import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

import { Loading } from "@/components/loading";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    // SplashScreen.hideAsync();
    return <Loading />;
  }
  return <Slot />;
}
