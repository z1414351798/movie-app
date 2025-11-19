import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { useEffect, useState, useCallback } from "react";

import useFetch from "@/services/usefetch";
import { fetchMovies } from "@/services/api";
import { getTrendingMovies } from "@/services/appwrite";

import { icons } from "@/constants/icons";
import { images } from "@/constants/images";

import SearchBar from "@/components/SearchBar";
import MovieCard from "@/components/MovieCard";
import TrendingCard from "@/components/TrendingCard";
import { useAuth } from "@/context/AuthContext";

const Index = () => {
  const router = useRouter();
  const { user, authLoading } = useAuth();

  // Trending Movies (no pagination)
  const {
    data: trendingMovies,
    loading: trendingLoading,
    error: trendingError,
  } = useFetch(getTrendingMovies);

  // Latest Movies
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<any[]>([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMovies = async (nextPage = 1) => {
    if (!hasMore) return;
    setLoadingMore(true);
    try {
      const newMovies = await fetchMovies({ query: "", page: nextPage });
      if (newMovies.length === 0) setHasMore(false);
      setMovies(prev => [...prev, ...newMovies]);
    } catch (err) {
      console.error(err);
    }
    setLoadingMore(false);
  };

  useEffect(() => {
    loadMovies(1); // initial load
  }, []);

  // Auth check
  useEffect(() => {
    if (!authLoading && !user) {
      router.replace("/(auth)/login");
    }
  }, [user, authLoading, router]);

  if (authLoading || !user) return null;

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="absolute w-full z-0"
        resizeMode="cover"
      />

      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

        <SearchBar
          onPress={() => router.push("/search")}
          placeholder="Search for a movie"
        />

        {/* Trending Movies */}
        {trendingLoading ? (
          <ActivityIndicator size="large" color="#fff" className="mt-10" />
        ) : trendingError ? (
          <Text className="text-white mt-5">
            Error: {trendingError.message}
          </Text>
        ) : trendingMovies ? (
          <View className="mt-10">
            <Text className="text-lg text-white font-bold mb-3">
              Trending Movies
            </Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={trendingMovies}
              contentContainerStyle={{ gap: 26 }}
              renderItem={({ item, index }) => (
                <TrendingCard movie={item} index={index} />
              )}
              keyExtractor={item => item.movie_id.toString()}
              ItemSeparatorComponent={() => <View className="w-4" />}
            />
          </View>
        ) : null}

        {/* Latest Movies */}
        <View className="mt-10">
          <Text className="text-lg text-white font-bold mb-3">
            Latest Movies
          </Text>

          <FlatList
            data={movies}
            renderItem={({ item }) => <MovieCard {...item} />}
            keyExtractor={item => item.id.toString()}
            numColumns={3}
            columnWrapperStyle={{
              justifyContent: "flex-start",
              gap: 20,
              paddingRight: 5,
              marginBottom: 10,
            }}
            scrollEnabled={false} // let ScrollView handle scroll
            onEndReached={() => {
              if (!loadingMore) {
                const nextPage = page + 1;
                setPage(nextPage);
                loadMovies(nextPage);
              }
            }}
            onEndReachedThreshold={0.5}
            ListFooterComponent={() =>
              loadingMore ? (
                <ActivityIndicator size="small" color="#fff" className="mt-2" />
              ) : null
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Index;
