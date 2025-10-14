import type { ButtonProp } from "../types/butttonProp.type";

function ButtonList({ name, onClick }: ButtonProp) {
  return (
    <div
      className="border border-gray-300 shadow-sm text-center font-bold py-4 hover:cursor-pointer hover:bg-gray-200"
      onClick={onClick}
    >
      {name}
    </div>
  );
}

export default ButtonList;
