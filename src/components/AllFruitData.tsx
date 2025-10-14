import { FruitStore } from "../stores/fruitStore";
import ButtonList from "./ButtonList";

function AllFruitData() {
  const allFruit = FruitStore((state) => state.allFruits);
  const removeFruitFromAllFruit = FruitStore(
    (state) => state.removeFruitFromAllFruits
  );

  return (
    <div className="flex-1 space-y-3">
      {allFruit.map((fruit, index) => (
        <ButtonList
          key={index}
          name={fruit.name}
          onClick={() => removeFruitFromAllFruit(fruit.name, fruit.type)}
        />
      ))}
    </div>
  );
}

export default AllFruitData;
