import { View, Text, useWindowDimensions } from 'react-native';

export default function HomeScreen() {
  const window = useWindowDimensions()
  console.log(window);

  return (
    <View style={{ marginTop: 100 }}>
      <Text style={{ fontSize: 20, padding: 20, lineHeight: 30 }}>
        <Text >Window Dimensions {'\n'}</Text>
      </Text>
    </View>
  );
}
 