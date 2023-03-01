import { FC } from "react";

interface ButtonProps {
  id: string;
  title?: string;
  onClick?: React.MouseEventHandler;
}

const Button: FC<ButtonProps> = ({ id, title, onClick }) => {
  return (
    <button
      id={id}
      className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-full h-14 bg-todoist-indigo text-white"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
