import { Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
  title: string;
}

export default function PageTitle({ title }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <Text
      style={{
        marginTop: insets.top * 0.3,
        marginHorizontal: 20,
      }}
      className="text-3xl font-bold"
    >
      {title}
    </Text>
  )
}
