import { render } from "preact";
import { Text, View } from "react-native";

import "./index.css";

export function App() {
  return (
    <View>
      <p className="italic text-black">This is styled by tailwind</p>
      <Text className="bold text-red-500">This is not</Text>
    </View>
  );
}

render(<App />, document.getElementById("app"));
