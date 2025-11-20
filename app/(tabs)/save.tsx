import MovieCard from "@/components/MovieCard";
import { icons } from "@/constants/icons";
import { getSavedMovies } from "@/services/appwrite";
import { images } from "@/constants/images";

import { View, ScrollView, FlatList, Image, Text } from "react-native";
import { useFocusEffect } from "expo-router";
import { useState, useCallback, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";



const Save = () => {
  const [savedMovies, setSavedMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user, authLoading } = useAuth();
  const user_id = user?.$id ?? null;

  const loadSaved = async () => {
    setLoading(true);
    const data = await getSavedMovies(user_id);
    setSavedMovies(data || []);
    setLoading(false);
  };

  // 🔥 Re-fetch every time the tab is opened
  useFocusEffect(
    useCallback(() => {
      if(user){
              loadSaved();
      }
    }, [])
  );

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="absolute w-full h-full -z-10"
        resizeMode="cover"
      />
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
        ListHeaderComponent={() => (
          <>
            <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

            <Text className="text-lg text-white font-bold mb-3">
              Saved Movies
            </Text>
          </>
        )}
      />
    </View>
  );
};

export default Save;
