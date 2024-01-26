import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name='resume' />
      <Stack.Screen name='projects' />
      <Stack.Screen name='recommendations' />
    </Stack>
  )
}