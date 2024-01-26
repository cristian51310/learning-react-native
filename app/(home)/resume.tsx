import PageTitle from "@/components/PageTitle";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ResumeScreen() {
  return (
    <SafeAreaView className='flex-1'>
      <PageTitle isBack title='Mi Trayectoria' />
    </SafeAreaView>
  );
}