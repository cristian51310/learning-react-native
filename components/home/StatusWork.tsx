import { Text, View } from "react-native";

export default function StatusWork() {
  return (
    <View
      className="p-2 border border-lime-600 bg-green-300/20 mt-4 rounded-md flex flex-row items-center gap-3 px-3 relative"
    >
      <View className="size-3 bg-lime-500 rounded-full animate-ping absolute left-3"></View>
      <Text className="text-base text-lime-600 font-semibold ml-6">
        Disponible para nuevos proyectos, contáctame
      </Text>
    </View>
  )
}
