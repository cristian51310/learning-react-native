import Card from '@/components/home/Card';
import SocialIcon from '@/components/home/SocialIcon';
import StatusWork from '@/components/home/StatusWork';
import { useRouter } from 'expo-router';
import { Image, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabOneScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={{
        marginTop: insets.top * 1.5,
        paddingBottom: insets.bottom * 3
      }}
    >
      <View className="mx-5 flex">
        <Image
          source={require('@/assets/images/portrait.webp')}
          className='size-24 rounded-full mb-3'
        />

        <Text className='text-2xl font-bold text-amber-500 mb-2'>
          Cristian Ruben Figueroa
        </Text>

        <Text className='text-lg my-1'>
          Programador Full Stack, Diseñador Frontend y Móvil
        </Text>
        <Text className='text-lg mb-1'>
          Creo soluciones para negocios en la web y en plataformas móviles.
        </Text>

        <StatusWork />

        <View className='flex flex-row items-center gap-4 mt-4'>
          <SocialIcon
            name='github'
          />
          <SocialIcon
            name='linkedin'
          />
          <SocialIcon
            name='email'
          />
          <SocialIcon
            name='twitter'
          />
        </View>

        <View className='flex gap-5 my-6'>
          <Card
            onPress={() => router.push('/resume')}
            icon='user'
            title='Mi Trayectoria'
            description='Conoce más sobre mi formación académica y mi experiencia laboral.'
          />
          <Card
            onPress={() => router.push('/projects')}
            icon='briefcase'
            title='Mis Proyectos'
            description='Algunos proyectos en los que he trabajado y de los que más orgulloso me siento.'
          />
          <Card
            onPress={() => router.push('/blog')}
            icon='bookmark'
            title='Mi Blog'
            description='Cuando no estoy trabajando, me gusta escribir sobre tecnología y desarrollo web.'
          />
          <Card
            onPress={() => router.push('/recommendations')}
            icon='star'
            title='Mis Recomendaciones'
            description='El software y cosas que uso para mantenerme productivo y pensar que estoy siendo productivo cuando en realidad solo estoy procrastinando'
          />
        </View>

      </View>

    </ScrollView>
  );
}
