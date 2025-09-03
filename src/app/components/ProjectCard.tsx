import Image from "next/image";
import { ReactNode } from "react";

interface ProjectProps {
  image: string;
  info: string;
  pdfLink: string;
  isComplete: boolean;
  children: ReactNode;
}

const ProjectCard = ({
  image,
  info,
  pdfLink,
  isComplete,
  children,
}: ProjectProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 w-9/10 border-2 border-blue-500 rounded-2xl gap-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <Image
          className="w-full h-full"
          src={image}
          alt=""
          width={1200}
          height={1600}
        />
        <div className="flex flex-col items-start justify-start pt-0 w-full gap-3 md:gap-5">
          <h1 className="text-4xl font-semibold">INFO</h1>
          <p className="text-2xl font-medium">{info}</p>
          <a
            href={pdfLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            View Project
          </a>
          {/* used Tech stacks */}
          <div className="flex gap-4 w-full justify-center">{children}</div>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <h2
          className={`flex p-1.5 rounded-3xl items-center items-self-end ${
            isComplete ? "bg-green-600" : "bg-gray-800"
          }`}
        >
          {isComplete ? "Complete" : "In Progress"}
        </h2>
      </div>
    </div>
  );
};

export default ProjectCard;
