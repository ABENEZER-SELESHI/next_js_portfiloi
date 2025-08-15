import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-start p1-5 md:pl-30 pt-8 md:pt-30 gap-3 md:gap-8">
      <p className="text-2x1 font-normal">Hi, I am</p>
      <div className="flex flex-col gap-1">
        <h1 className="text-6xl font-extrabold">Abenezer Seleshi Abdisa</h1>
        <h2 className="text-3xl font-semibold">Fullstack developer</h2>
      </div>
      <div className="flex gap-3 md:gap-12">
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
  );
};

export default HomePage;
