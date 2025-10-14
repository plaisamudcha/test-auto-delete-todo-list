import type { FruitList } from "./fruitList.type";

export type NameProp = {
  data: FruitList[];
  name: string;
  onclick?: () => void;
};
