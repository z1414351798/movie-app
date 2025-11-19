import MovieCard from "@/components/MovieCard";
import MovieList from "@/components/MovieList";
import { icons } from "@/constants/icons";
import { getSavedMovies } from "@/services/appwrite";
import useFetch from "@/services/usefetch";
import { images } from "@/constants/images";

import { View, ScrollView, FlatList, Image, Text } from "react-native";
import { useFocusEffect } from "expo-router";
import { useState, useCallback, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";



const Save = () => {
  const [savedMovies, setSavedMovies] = useState();
  const [loading, setLoading] = useState(true);
  const { user, authLoading } = useAuth();
  const user_id = user.$id;

  const loadSaved = async () => {
    setLoading(true);
    const data = await getSavedMovies(user_id);
    setSavedMovies(data || []);
    setLoading(false);
  };

  // 🔥 Re-fetch every time the tab is opened
  useFocusEffect(
    useCallback(() => {
      loadSaved();
    }, [])
  );

  const router = useRouter();

  useEffect(() => {
    if (!authLoading && !user) {
      router.replace("/(auth)/login");
    }
  }, [user, authLoading, router]);

  if (authLoading || !user) {
    return null; // or a loading indicator
  }

  return (
    <View className="flex-1 bg-primary">
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

        <View className="mt-10">
          <Text className="text-lg text-white font-bold mb-3">
            Saved Movies
          </Text>

          <FlatList
            data={savedMovies}
            renderItem={({ item }) => <MovieCard {...item} />}
            keyExtractor={(item) => item.movie_id.toString()}
            numColumns={3}
            columnWrapperStyle={{
              justifyContent: "flex-start",
              gap: 20,
              paddingRight: 5,
              marginBottom: 10,
            }}
            className="mt-2 pb-32"
            scrollEnabled={false}
          />

        </View>

      </ScrollView>
    </View>
  );
};

export default Save;
