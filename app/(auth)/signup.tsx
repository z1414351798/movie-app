import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";
import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";

export default function Signup() {
  const { signup } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    await signup(email, password, name);
    router.replace("/(auth)/login");
  };

  return (
    <View className="flex-1 justify-center p-10 bg-primary">
      <Text className="text-white text-2xl mb-6">Sign Up</Text>

      <TextInput
        placeholder="Name"
        className="bg-white p-3 mb-4"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Email"
        className="bg-white p-3 mb-4"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        className="bg-white p-3 mb-4"
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Create Account" onPress={handleSignup} />
    </View>
  );
}
