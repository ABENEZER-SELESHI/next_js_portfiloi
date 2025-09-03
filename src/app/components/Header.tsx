import Link from "next/link";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  return (
    <header className="w-full flex p-8 justify-between items-center px-2 md:px-12">
      <div>
        <h1 className="font-semibold">ABENEZER ABDISA</h1>
      </div>
      <div className="hidden md:flex gap-8 font-medium md:items-center">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        {/* <Link href="/skills">Skills</Link> */}
        <Link href="/certificates">Certificates</Link>
        <Link href="/aboutme">About me</Link>
        {/* <Link className="bg-white p-2 text-black rounded-3xl" href="/contacts">
          Contact Me
        </Link> */}
      </div>
      <div className="md:hidden bg-black">
        <BurgerMenu>
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/certificates">Certificates</Link>
          <Link href="/aboutme">About me</Link>
          <Link
            className="bg-white p-2 text-black rounded-3xl"
            href="/contacts"
          >
            Contact Me
          </Link>
        </BurgerMenu>
      </div>
    </header>
  );
};

export default Header;
