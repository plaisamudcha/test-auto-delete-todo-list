import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { FruitList } from "../types/fruitList.type";
import { allFruitList } from "../data/fruitList.data";

interface FruitStoreState {
  allFruits: FruitList[];
  fruits: FruitList[];
  vegetables: FruitList[];
  removeFruitFromAllFruits: (name: string, type: string) => void;
  removeFruitFromFruits: (name: string) => void;
  removeVegetableFromVegetables: (name: string) => void;
  removeFruitByClickTable: (type: string) => void;
}

export const FruitStore = create<FruitStoreState>()(
  persist(
    (set) => ({
      allFruits: allFruitList,
      fruits: [],
      vegetables: [],
      removeFruitFromAllFruits: (name, type) => {
        if (type === "Fruit") {
          set((state) => {
            const removedItem = state.allFruits.find(
              (fruit) => fruit.name === name
            );
            return {
              allFruits: state.allFruits.filter((fruit) => fruit.name !== name),
              fruits: removedItem
                ? [...state.fruits, removedItem]
                : state.fruits,
            };
          });
        } else if (type === "Vegetable") {
          set((state) => {
            const removedItem = state.allFruits.find(
              (veg) => veg.name === name
            );
            return {
              allFruits: state.allFruits.filter((veg) => veg.name !== name),
              vegetables: removedItem
                ? [...state.vegetables, removedItem]
                : state.vegetables,
            };
          });
        }
      },
      removeFruitFromFruits: (name) => {
        set((state) => {
          const removedItem = state.fruits.find((fruit) => fruit.name === name);
          return {
            allFruits: removedItem
              ? [...state.allFruits, removedItem]
              : state.allFruits,
            fruits: state.fruits.filter((fruit) => fruit.name !== name),
          };
        });
      },
      removeVegetableFromVegetables: (name) => {
        set((state) => {
          const removedItem = state.vegetables.find((veg) => veg.name === name);
          return {
            allFruits: removedItem
              ? [...state.allFruits, removedItem]
              : state.allFruits,
            vegetables: state.vegetables.filter((veg) => veg.name !== name),
          };
        });
      },
      removeFruitByClickTable: (type) => {
        if (type === "Fruit") {
          set((state) => {
            if (state.fruits.length === 0) return state;
            const removedItem = state.fruits[state.fruits.length - 1];
            return {
              allFruits: [...state.allFruits, removedItem],
              fruits: state.fruits.slice(0, -1),
            };
          });
        } else if (type === "Vegetable") {
          set((state) => {
            if (state.vegetables.length === 0) return state;
            const removedItem = state.vegetables[state.vegetables.length - 1];
            return {
              allFruits: [...state.allFruits, removedItem],
              vegetables: state.vegetables.slice(0, -1),
            };
          });
        }
      },
    }),
    { name: "FruitStore" }
  )
);
