import AllFruitData from "../components/AllFruitData";
import FruitData from "../components/FruitData";
import VegetableData from "../components/VegetableData";

function HomePage() {
  return (
    <div className="flex justify-between gap-4 p-4 min-h-screen">
      <AllFruitData />
      <FruitData />
      <VegetableData />
    </div>
  );
}

export default HomePage;
