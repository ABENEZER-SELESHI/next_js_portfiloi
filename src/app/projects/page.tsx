// src/app/projects/page.tsx
import { DiNodejs } from "react-icons/di";
import { SiExpress, SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import BackendProjectCard from "../components/BackendProjectCard";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {
  return (
    <div className="relative flex flex-col gap-5 md:gap-20 items-center justify-center overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-300 rounded-full opacity-30 blur-2xl"></div>
      <div className="absolute bottom-20 right-20 w-56 h-56 bg-purple-300 rounded-full opacity-30 blur-2xl"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-300 rounded-full opacity-40 blur-xl"></div>

      {/* Content */}
      <h1 className="text-3xl font-bold border-white border-[3px] rounded p-3">
        PROJECTS
      </h1>
      <h2 className="text-3xl font-bold">FRONT-END</h2>
      <div className="flex flex-col gap-3 md:gap-6 p-4 items-center">
        <ProjectCard
          image={"/projects/StarterProjectG68HomePage.jpg"}
          info={
            "During my internship at A2SV, I collaborated with my teammates on a starter project to strengthen our skills in modern web development. We built a responsive web application using Next.js, applying best practices in both frontend design and security. The project leveraged comprehensive Next.js tools and libraries to ensure scalability, performance, and robust security features."
          }
          pdfLink={"https://a2-sv-starter-project-g68-kscm.vercel.app/"}
          isComplete={true}
        >
          <TbBrandNextjs className="text-5xl" />
        </ProjectCard>
      </div>
      <h2 className="text-3xl font-bold">BACK-END</h2>
      <div className="flex flex-col gap-3 md:gap-6 p-4 items-center">
        <BackendProjectCard
          title={"Auction System"}
          info={
            "This is a backend project for an auction system in when the seller and buyers anonimity is guaranteed and the the auctioning process will be fair by holding the auction live at set schedule."
          }
          pdfLink={
            "https://github.com/ABENEZER-SELESHI/auction-project-node-js"
          }
          isComplete={false}
        >
          <DiNodejs className="text-5xl" />
          <SiExpress className="text-5xl" />
          <SiMongodb className="text-5xl" />
        </BackendProjectCard>
        <BackendProjectCard
          title={"Habesha Housing"}
          info={
            "This is a backend project for an online house sales andd renting system thst makes it easier for buyers to access available houses very easily, and also for sellers to have their preferences known to their buyers before hand."
          }
          pdfLink={"https://github.com/ABENEZER-SELESHI/house-marketplace-api"}
          isComplete={true}
        >
          <DiNodejs className="text-5xl" />
          <SiExpress className="text-5xl" />
          <SiMongodb className="text-5xl" />
        </BackendProjectCard>
      </div>
    </div>
  );
};

export default ProjectsPage;
