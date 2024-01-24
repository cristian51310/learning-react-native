import PageTitle from '@/components/PageTitle';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function StyleScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <PageTitle title='Sistema de Diseño' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
