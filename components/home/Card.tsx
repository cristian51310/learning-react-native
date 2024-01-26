import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

interface Props {
  title: string;
  description: string;
  icon: React.ComponentProps<typeof FontAwesome>['name'];
  onPress: () => void;
}

export default function Card(props: Props) {
  return (
    <Pressable
      onPress={props.onPress}
      className={
        `w-full flex border border-sky-800/50 p-4 rounded-md bg-sky-200/30`
      }
    >
      <View className="flex flex-row items-center gap-3 mb-2.5 relative">
        <View className="flex items-center justify-center w-7">
          <FontAwesome
            name={props.icon}
            size={20}
            color={"#646464"}
          />
        </View>
        <Text className="text-xl font-bold text-neutral-700">
          {props.title}
        </Text>
        <FontAwesome5
          name="arrow-right"
          size={16}
          color={"#555555"}
          className="absolute right-0"
        />
      </View>

      <Text className="text-base">
        {props.description}
      </Text>
    </Pressable>
  )
}