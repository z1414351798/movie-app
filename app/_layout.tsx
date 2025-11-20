import { Stack } from "expo-router";
import "./globals.css";
import { StatusBar } from "react-native";
import { AuthProvider } from "@/context/AuthContext";
import { AdMobInterstitial } from "expo-ads-admob";
import { useEffect } from "react";


export default function RootLayout() {
  useEffect(() => {
    const showAd = async () => {
      try {
        await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712'); // test ID
        await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
        await AdMobInterstitial.showAdAsync();
      } catch (error) {
        console.log('Interstitial ad error:', error);
      }
    };

    showAd();
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
