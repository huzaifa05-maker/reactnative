import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Index Page" }} />
      <Stack.Screen name="about" options={{ title: "About Page" }} />
      <Stack.Screen name="product/index" options={{ title: "Product Page" }} />
      <Stack.Screen name="blog/[blogid]" options={{ title: "Blog Page" }} />
    </Stack>
  );
}
