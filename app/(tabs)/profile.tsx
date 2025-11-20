import { useAuth } from "@/context/AuthContext";
import { View, Text, Button, Image } from "react-native";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";



export default function Profile() {
  const { user, logout } = useAuth();
  const router = useRouter();

  if (!user) {
    return (
      <View className="flex-1 justify-center items-center bg-primary">
        <Text className="text-white mb-3">You are not logged in</Text>
        <Button title="Login" onPress={() => router.push("/(auth)/login")} />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-primary justify-center items-center">
      <Text className="text-white text-xl mb-4">{user.name}</Text>
      <Text className="text-gray-400 mb-10">{user.email}</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}
