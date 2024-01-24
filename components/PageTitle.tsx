import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text } from "./Themed";

interface Props {
  title: string;
}

export default function PageTitle({ title }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <Text style={{
      fontSize: 26,
      fontWeight: 'bold',
      marginTop: insets.top * 0.3,
      marginHorizontal: 20,
    }}>
      {title}
    </Text>
  )
}
