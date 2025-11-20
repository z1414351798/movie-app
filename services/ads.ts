// services/ads.ts
import { AdMobInterstitial, setTestDeviceIDAsync } from "expo-ads-admob";

// Set a test device ID (your simulator or device)
export async function initAds() {
  await setTestDeviceIDAsync("EMULATOR"); // always use test ID
}

export async function showInterstitialAd() {
  try {
    await AdMobInterstitial.setAdUnitID("ca-app-pub-3940256099942544/1033173712"); // Test Ad Unit ID
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
    await AdMobInterstitial.showAdAsync();
  } catch (error) {
    console.log("AdMob error:", error);
  }
}
