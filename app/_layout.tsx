import { Stack } from "expo-router";
import "./globals.css";
import { StatusBar } from "react-native";
import { AuthProvider } from "@/context/AuthContext";
import { showInterstitialAd } from "@/ads/interstitial";
import { useEffect } from "react";

export default function RootLayout() {

      // Show interstitial ad on app start
  useEffect(() => {
    showInterstitialAd();
  }, []);

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
