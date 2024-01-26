import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
  title: string;
  isBack?: boolean;
}

export default function PageTitle({ title, isBack }: Props) {
  const insets = useSafeAreaInsets();
  const router = useRouter()

  return (
    <Pressable
      className={`
        flex flex-row items-center mx-5 
        ${isBack && "active:opacity-50"}
      `}
      onPress={isBack ? () => router.back() : null}
    >
      {isBack && (
        <FontAwesome
          name="arrow-left"
          size={22}
          className="mr-4"
        />
      )}
      <Text
        style={{
          marginTop: insets.top * 0.3,
          marginBottom: insets.top * 0.3,
        }}
        className="text-3xl font-bold"
      >
        {title}
      </Text>
    </Pressable>
  )
}
