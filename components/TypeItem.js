import { View, Text } from "react-native";
import { Center, Image } from "native-base";

export default function AnimalItem({ animal }) {
  return (
    <View>
      <Center>
        <Text>{animal.name}</Text>
        <Image
          size={50}
          borderRadius={100}
          source={{
            uri: animal.image_link,
          }}
          alt={animal.name}
        />
      </Center>
    </View>
  );
}
