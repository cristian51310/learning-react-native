import { Zocial } from "@expo/vector-icons";
import { View } from "react-native";

interface Props {
  name: React.ComponentProps<typeof Zocial>['name'];
}

export default function SocialIcon(props: Props) {
  return (
    <View className="border border-neutral-500 justify-center items-center px-3 p-2 rounded-md">
      <Zocial
        name={props.name}
        color={"#757575"}
        size={24}
      />
    </View>
  )
}