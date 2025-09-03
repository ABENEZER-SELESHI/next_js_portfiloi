import { ReactNode } from "react";
import { FaGithub } from "react-icons/fa";

interface BackendProjectProps {
  title: string;
  info: string;
  pdfLink: string;
  isComplete: boolean;
  teck: string[];
  children: ReactNode;
}

const BackendProjectCard = ({
  title,
  info,
  pdfLink,
  isComplete,
  teck,
  children,
}: BackendProjectProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 items-center justify-center p-6 w-9/10 border-2 border-blue-500 rounded-2xl">
      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <FaGithub className="text-3xl md:text-4xl" />
          <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        </div>
        <h2
          className={`flex p-1.5 rounded-3xl items-center items-self-end ${
            isComplete ? "bg-green-600" : "bg-gray-800"
          }`}
        >
          {isComplete ? "Complete" : "In Progress"}
        </h2>
      </div>
      <div className="flex flex-col items-start justify-start pt-0 w-full gap-3 md:gap-5">
        <p className="text-2xl font-medium">{info}</p>
        {/* used Tech stacks */}
        <div className="flex gap-4 w-full justify-center">{children}</div>
        <a
          href={pdfLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 items-center gap-1"
        >
          <FaGithub />
          <span>View Repo</span>
        </a>
      </div>
    </div>
  );
};

export default BackendProjectCard;
