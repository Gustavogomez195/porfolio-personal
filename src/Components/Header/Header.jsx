import logo from "../../assets/gustavologo.png";
import { Navbar } from "./Navbar";

const Header = () => {
  return (
    <header className=" sticky top-0 z-20 w-full px-12 pt-10  bg-stone-100 flex items-center justify-between ">
      <div className="w-20  sm:w-[148px] sm:ml-7 sm:max-[850px]:hidden">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <Navbar />
      </div>
    </header>
  );
};

export { Header };
