import { Link } from 'expo-router';  // ✅ Add this line
import { View, Text } from 'react-native';
import SuccessButton from '@/components/SuccessButton';

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
      <Link href="/product/index">
        <Text>Go to Product</Text>
      </Link>
      <Link href="/blog/[blogid]">
        <Text>Go to Blog</Text>
      </Link>

      <SuccessButton title="Testing"/>

    </View>
  );
}
