import { FC } from "react";
import { IconContext } from "react-icons";
import { BsPencilFill, BsTrash } from "react-icons/bs";

interface CardProps {
  id: any;
  title?: string;
  date?: string;
  onUpdate?: React.MouseEventHandler;
  onDelete?: React.MouseEventHandler;
}

const Card: FC<CardProps> = ({ id, title, date, onUpdate, onDelete }) => {
  return (
    <div
      id={id}
      className="flex flex-row justify-between w-full h-20 outline outline-offset-2 outline-2 outline-todoist-indigo rounded-md shadow-md"
    >
      <div className="-space-y-5">
        <p className="font-semibold text-xl text-todoist-indigo m-5">{title}</p>
        <p className="text-md text-todoist-indigo m-5">{date}</p>
      </div>
      <div className="m-10 flex flex-row space-x-3">
        <IconContext.Provider value={{ color: "#4445C4" }}>
          <BsPencilFill onClick={onUpdate} />
          <BsTrash onClick={onDelete} />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Card;
