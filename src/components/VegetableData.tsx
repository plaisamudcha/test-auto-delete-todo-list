import { FruitStore } from "../stores/fruitStore";
import TableData from "./TableData";

function VegetableData() {
  const vegetableData = FruitStore((state) => state.vegetables);
  const removeVegetableByClickTable = FruitStore(
    (state) => state.removeFruitByClickTable
  );
  return (
    <>
      <TableData
        name="Vegetable"
        data={vegetableData}
        onclick={() => removeVegetableByClickTable("Vegetable")}
      />
    </>
  );
}

export default VegetableData;
