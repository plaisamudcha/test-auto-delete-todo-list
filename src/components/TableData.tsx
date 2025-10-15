import { FruitStore } from "../stores/fruitStore";
import type { NameProp } from "../types/nameProp.type";
import ButtonList from "./ButtonList";

function TableData({ data, name, onclick }: NameProp) {
  const removeFruitFromFruits = FruitStore(
    (state) => state.removeFruitFromFruits
  );
  const removeVegetableFromVegetables = FruitStore(
    (state) => state.removeVegetableFromVegetables
  );

  const handleRemove = (e: React.MouseEvent, type: string, name: string) => {
    e.stopPropagation();

    if (type === "Fruit") {
      removeFruitFromFruits(name);
    } else if (type === "Vegetable") {
      removeVegetableFromVegetables(name);
    }
  };

  return (
    <div className="border flex-1 border-gray-300" onClick={onclick}>
      <div className="border-b border-gray-200 bg-gray-200 py-3 text-center font-bold text-2xl">
        {name}
      </div>
      <div className="space-y-2 p-3">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div key={index}>
              <ButtonList
                name={item.name}
                onClick={(e: React.MouseEvent) =>
                  handleRemove(e, item.type, item.name)
                }
              />
            </div>
          ))
        ) : (
          <div className="py-2"></div>
        )}
      </div>
    </div>
  );
}

export default TableData;
