// ads/interstitialAd.ts
import { InterstitialAd, AdEventType, TestIds } from 'react-native-google-mobile-ads';

// Use test ID for development
const interstitial = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL, {
  requestNonPersonalizedAdsOnly: true,
});

export const showInterstitialAd = () => {
  interstitial.load();

  const unsubscribeLoaded = interstitial.addAdEventListener(AdEventType.LOADED, () => {
    console.log('Interstitial Ad Loaded');
    interstitial.show();
    unsubscribeLoaded(); // Remove listener after showing
  });

  interstitial.addAdEventListener(AdEventType.ERROR, (error) => {
    console.error('Interstitial Ad Error', error);
  });
};
