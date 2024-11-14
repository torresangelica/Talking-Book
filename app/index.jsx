import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image, ImageBackground } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  const logoSize = { width: 500, height: 200 }; // Increased logo size

  // URL of the background image
  const backgroundImageUrl = 'https://i.pinimg.com/564x/ba/6d/fe/ba6dfe66fa3b9b4478097760034912b1.jpg'; // Background image URL

  return (
    <ImageBackground
      source={{ uri: backgroundImageUrl }} // Using URL for background image
      style={{ flex: 1 }}
      resizeMode="cover" // Adjust this to your liking (e.g., "cover", "contain")
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <View style={{ width: '100%', alignItems: 'center', paddingHorizontal: 16 }}>
            <Image
              source={images.logo}
              style={{ width: logoSize.width, height: logoSize.height, marginTop: 40 }}
              resizeMode="contain"
            />
            <View style={{ marginTop: 5 }}>
              <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>
                Transforms your reading experience by bringing your favorite texts to life
                with crystal-clear narration.
              </Text>
            </View>
            <Text style={{ fontSize: 11, fontWeight: 'bold', color: 'black', marginTop: 100, textAlign: 'center' }}>
              Join us! Let’s make every story just a play button away.
            </Text>

            <CustomButton
              title="Continue To Listen"
              handlePress={() => router.push('/sign-in')}
              containerStyles={{ width: '90%', marginTop: 20 }} // Set custom width here
            />


          </View>
        </ScrollView>
        <StatusBar backgroundColor="orange" style="light" />
      </SafeAreaView>
    </ImageBackground>
  );
}