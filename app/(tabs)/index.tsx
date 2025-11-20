import {
  View,
  Text,
  ActivityIndicator,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";

import useFetch from "@/services/usefetch";
import { fetchMovies } from "@/services/api";
import { getTrendingMovies } from "@/services/appwrite";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

import MovieCard from "@/components/MovieCard";
import TrendingCard from "@/components/TrendingCard";
import SearchBar from "@/components/SearchBar";

const Index = () => {
  const router = useRouter();

  // trending
  const { data: trendingMovies, loading: trendingLoading } =
    useFetch(getTrendingMovies);

  // latest
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<any[]>([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMovies = async (nextPage = 1) => {
    if (!hasMore) return;

    setLoadingMore(true);
    try {
      const newMovies = await fetchMovies({ query: "", page: nextPage });

      // Remove duplicates to avoid duplicate keys
      setMovies(prev => {
        const merged = [...prev, ...newMovies];
        const unique = Array.from(new Map(merged.map(m => [m.id, m])).values());
        return unique;
      });

      if (newMovies.length === 0) setHasMore(false);
    } catch (err) {
      console.log(err);
    }
    setLoadingMore(false);
  };

  useEffect(() => {
    loadMovies(1);
  }, []);

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="absolute w-full h-full -z-10"
        resizeMode="cover"
      />

      <FlatList
        data={movies}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        onEndReached={() => {
          if (!loadingMore) {
            const nextPage = page + 1;
            setPage(nextPage);
            loadMovies(nextPage);
          }
        }}
        onEndReachedThreshold={0.4}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={{
          justifyContent: "flex-start",
          gap: 20,
          paddingHorizontal: 10,
          marginBottom: 10,
        }}
        renderItem={({ item }) => <MovieCard {...item} />}

        // Header (Trending + Search + Logo)
        ListHeaderComponent={() => (
          <>
            <Image
              source={icons.logo}
              className="w-12 h-10 mt-20 mb-5 mx-auto"
            />

            <SearchBar
              onPress={() => router.push("/search")}
              placeholder="Search for a movie"
            />

            <Text className="text-lg text-white font-bold mt-10 mb-3">
              Trending Movies
            </Text>

            {trendingLoading ? (
              <ActivityIndicator size="large" color="#fff" />
            ) : (
              <FlatList
                data={trendingMovies}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                  <TrendingCard movie={item} index={index} />
                )}
                keyExtractor={(item) => item.movie_id.toString()}
                contentContainerStyle={{gap:26, paddingRight: 20 }}
              />
            )}

            <Text className="text-lg text-white font-bold mt-10 mb-3">
              Latest Movies
            </Text>
          </>
        )}

        ListFooterComponent={() =>
          loadingMore ? (
            <ActivityIndicator size="small" color="#fff" className="mt-2" />
          ) : null
        }
      />
    </View>
  );
};

export default Index;
