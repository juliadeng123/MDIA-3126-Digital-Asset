import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
        <Text>This is the sandwich page&#129386;</Text>
        <Link href="/pizza">Take me to the pizza page, please</Link>
    </View>
)
}