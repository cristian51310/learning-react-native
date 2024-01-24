import PageTitle from '@/components/PageTitle';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function StyleScreen() {
  return (
    <SafeAreaView className='flex-1'>
      <PageTitle title='Sistema de Diseño' />
    </SafeAreaView>
  );
}
