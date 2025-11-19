import { useAuth } from "@/context/AuthContext";
import { Link, useRouter } from "expo-router";
import { View, Text, TextInput, Button } from "react-native";
import { useEffect, useState } from "react";

export default function Login() {
  const { login, user } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) {
      router.replace("/(tabs)"); // navigate after render
    }
  }, [user, router]);

  // optional: render a loader or login form
  if (user) return null;

  return (
    <View className="flex-1 justify-center p-10 bg-primary">
      <Text className="text-white text-2xl mb-6">Login</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        className="bg-white p-3 mb-4"
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        className="bg-white p-3 mb-4"
      />

      <Button title="Login" onPress={() => login(email, password)} />

      <Link href="/(auth)/signup">
        <Text className="text-blue-400 mt-5">Create an account</Text>
      </Link>
    </View>
  );
}
