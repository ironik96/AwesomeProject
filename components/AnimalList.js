import { View, Text } from "react-native";
import animalStore from "../stores/animalStore";
import AnimalItem from "./AnimalItem";

export default function AnimalList() {
  const animalItemList = animalStore.animals.map((animal) => (
    <AnimalItem key={animal.id} animal={animal} />
  ));
  return <View>{animalItemList}</View>;
}
