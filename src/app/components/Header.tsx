import Link from "next/link";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  return (
    <header className="w-full flex p-8 justify-between px-2 md:px-12">
      <div>
        <h1 className="font-semibold">ABENEZER ABDISA</h1>
      </div>
      <div className="hidden md:flex gap-8 font-medium">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/certificates">Certificates</Link>
        <Link href="/aboutme">About me</Link>
      </div>
      <div className="md:hidden">
        <BurgerMenu>
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/certificates">Certificates</Link>
          <Link href="/aboutme">About me</Link>
        </BurgerMenu>
      </div>
    </header>
  );
};

export default Header;
