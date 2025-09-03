import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const HomePage = () => {
  return (
    <div className="relative flex flex-col justify-center items-start p-5 md:pl-30 pt-8 md:pt-30 gap-3 md:gap-8 overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-13 left-20 w-40 h-40 rounded-full border-8 border-blue-400 opacity-50 z-0"></div>
      <div className="absolute bottom-20 right-20 w-56 h-56 rounded-full border-25 border-purple-400 opacity-50 z-0"></div>
      <div className="absolute top-2/3 left-1/2 w-70 h-70 rounded-full border-30 border-pink-400 opacity-70 z-0"></div>

      {/* Content (z-index higher) */}
      <div className="relative z-10">
        <p className="text-2xl font-normal">Hi, I am</p>
        <div className="flex flex-col gap-1">
          <h1 className="text-6xl font-extrabold">Abenezer Seleshi Abdisa</h1>
          <h2 className="text-3xl font-semibold">Fullstack developer</h2>
        </div>
        <div className="flex gap-3 md:gap-12 mt-4">
          <a href="https://github.com/ABENEZER-SELESHI">
            <FaGithub className="text-3xl" />
          </a>
          <a href="https://www.linkedin.com/in/abenezer-seleshi-66038a246/">
            <FaLinkedin className="text-3xl" />
          </a>
          <a href="">
            <MdOutlineMail className="text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
