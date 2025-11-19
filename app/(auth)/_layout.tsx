import { Stack } from "expo-router";

export default function AuthLayout({ children }: any) {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // applies to all screens inside (auth)
      }}
    >
      {children}
    </Stack>
  );
}
