import axios from "axios";
import { makeAutoObservable } from "mobx";

const URL = "https://zoo-animal-api.herokuapp.com/animals/rand/7";

class AnimalStore {
  animals = [];
  animalsByType;

  constructor() {
    makeAutoObservable(this);
    this.fetchAnimals();
    this.sortAnimalsByType();
  }

  fetchAnimals = async () => {
    try {
      const response = await axios.get(URL);
      this.animals = response.data;
    } catch (error) {
      console.error(error);
    }
  };

  sortAnimalsByType = () => {
    this.animals.forEach((animal) => {
      const key = animal.animal_type;
      this.animalsByType[key] = [...this.animalsByType[key], animal];
    });
  };
}

export default new AnimalStore();
