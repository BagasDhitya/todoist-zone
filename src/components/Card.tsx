import { FC } from "react";

interface CardProps {
  id: string;
  title?: string;
  value?: string;
  onChange?: React.ChangeEventHandler;
}

const Card: FC<CardProps> = ({ id, title, value, onChange }) => {
  return (
    <div
      id={id}
      className="flex flex-row justify-between w-full h-16 outline outline-offset-2 outline-2 outline-todoist-indigo rounded-md shadow-md"
    >
      <div className="grid content-center">
        <p className="font-semibold text-xl text-todoist-indigo m-5">{title}</p>
      </div>
      <div className="m-6">
        <input
          className="w-5 h-5"
          type="radio"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Card;
