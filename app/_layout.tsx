import { Stack } from "expo-router";
import "./globals.css";
import { StatusBar } from "react-native";
import { AuthProvider } from "@/context/AuthContext";
import {
  InterstitialAd,
  AdEventType,
  TestIds
} from 'react-native-google-mobile-ads';
import { useEffect } from "react";


export default function RootLayout() {
  useEffect(() => {
    const showAd = async () => {
      const interstitial = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL);

      interstitial.load();

      interstitial.addAdEventListener(AdEventType.LOADED, () => {
        interstitial.show();
      });
    }}, []);

  return (
    <>
      <StatusBar hidden={true} />

      <AuthProvider>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="(auth)"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="movie/[id]"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </AuthProvider>

    </>
  );
}
