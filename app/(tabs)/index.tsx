import PageTitle from '@/components/PageTitle';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabOneScreen() {
  return (
    <SafeAreaView className='flex-1'>
      <PageTitle title='Sobre Mí' />
    </SafeAreaView>
  );
}
