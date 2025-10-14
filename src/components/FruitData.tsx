import { FruitStore } from "../stores/fruitStore";
import TableData from "./TableData";

function FruitData() {
  const fruitData = FruitStore((state) => state.fruits);
  const removeFruitByClickTable = FruitStore(
    (state) => state.removeFruitByClickTable
  );
  return (
    <TableData
      name="Fruit"
      data={fruitData}
      onclick={() => removeFruitByClickTable("Fruit")}
    />
  );
}

export default FruitData;
