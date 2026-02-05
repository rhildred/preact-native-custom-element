import { View } from "react-native";
import { PaperProvider } from 'react-native-paper';
import { Text, Button } from 'react-native-paper';

export function ItWorks() {
  return (
    <PaperProvider>
      <View className="p-[10px]">
        <Text variant="headlineMedium">Welcome to React Native Paper with Vite!</Text>
        <Button mode="contained" onPress={() => console.log('Pressed')} className="mt-[15px]">
          Press me
        </Button>
      </View>
    </PaperProvider>
  );
}