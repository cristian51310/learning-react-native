import PageTitle from "@/components/PageTitle";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ReccomendationsScreen() {
  return (
    <SafeAreaView className='flex-1'>
      <PageTitle isBack title='Mis Recomendaciones' />
    </SafeAreaView>
  );
}