import { View, Text } from "react-native";
import animalStore from "../stores/animalStore";
import AnimalItem from "./AnimalItem";

export default function TypeList() {
  // for (const [key, value] of Object.entries(animalStore.animalsByType)) {
  //     console.log(`${key}: ${value}`);
  //   }

  const animalItemList = animalStore.animalsByType.map((type) => (
    <AnimalItem key={animal.id} animal={animal} />
  ));
  return <View>{animalItemList}</View>;
}
