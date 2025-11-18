import YoutubePlayer from "react-native-youtube-iframe";
import { View } from "react-native";

export default function TrailerPlayer({ videoKey }) {
  if (!videoKey) return null;

  return (
    <View className="flex-1 justify-center items-center bg-black px-5">
      <View className="w-full aspect-video">
        <YoutubePlayer
          height={200} // you can also use full width via aspect ratio
          play={true}
          videoId={videoKey}
          webViewStyle={{ opacity: 0.99 }}
          forceAndroidAutoplay={true}
        />
      </View>
    </View>
  );
}
