import { View, Text } from "react-native";
import { Button, Box } from "native-base";
import AnimalList from "./AnimalList";
import { observer } from "mobx-react";

function Home() {
  return (
    <Box alignItems="center">
      <AnimalList />
      <Button onPress={() => alert("hello world")}>Click Me</Button>
    </Box>
  );
}

export default observer(Home);
