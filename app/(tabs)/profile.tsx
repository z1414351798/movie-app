import { useAuth } from "@/context/AuthContext";
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";
import { useEffect } from "react";



export default function Profile() {

  const { user, authLoading, logout } = useAuth();
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
    <View className="flex-1 bg-primary justify-center items-center">
      <Text className="text-white text-xl mb-4">{user?.name}</Text>
      <Text className="text-gray-400 mb-10">{user?.email}</Text>

      <Button title="Logout" onPress={logout} />
    </View>
  );
}
