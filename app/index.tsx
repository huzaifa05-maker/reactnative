import { Link } from 'expo-router';  // ✅ Add this line
import { View, Text } from 'react-native';



export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is home page</Text>
    <Link href="/about">
        <Text>Go to About</Text>
      </Link>

    </View>
  );
}
