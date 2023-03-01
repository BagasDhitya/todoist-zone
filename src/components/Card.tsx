import { FC } from "react";
import { IconContext } from "react-icons";
import { BsPencilFill, BsTrash } from "react-icons/bs";

interface CardProps {
  id: string;
  title?: string;
  onUpdate?: React.MouseEventHandler;
  onDelete?: React.MouseEventHandler;
}

const Card: FC<CardProps> = ({ id, title, onUpdate, onDelete }) => {
  return (
    <div
      id={id}
      className="flex flex-row justify-between w-full h-16 outline outline-offset-2 outline-2 outline-todoist-indigo rounded-md shadow-md"
    >
      <div className="grid content-center">
        <p className="font-semibold text-xl text-todoist-indigo m-5">{title}</p>
      </div>
      <div className="m-6 flex flex-row space-x-3">
        <IconContext.Provider value={{ color: "#4445C4" }}>
          <BsPencilFill onClick={onUpdate} />
          <BsTrash onClick={onDelete} />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Card;
