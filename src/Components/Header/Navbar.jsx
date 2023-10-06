import { useState } from "react";
import list from "../../assets/list.svg";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(true);

  const handleClick = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <nav>
      <ul
        className={` ${
          menu ? "hidden" : "flex"
        } flex-col justify-center items-center justify-around bg-gray-600 rounded absolute left-22 right-12 mx-auto top-20 w-72 h-72 font-mont text-sm text-white  cursor-pointer 
        
        
          sm:flex sm:bg-transparent sm:text-gray-500 sm:flex-row sm:top-5 sm:h-full sm:right-52 sm:gap-10   `}
      >
        <li className="hover:text-black">
          <Link to="Inicio" spy={true} smooth={true} offset={50} duration={500}>
            INICIO
          </Link>
        </li>
        <li className="hover:text-black">
          <Link
            to="Sobremi"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            SOBRE
          </Link>
        </li>
        <li className="hover:text-black">
          <Link
            to="Porfolio"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            PORFOLIO
          </Link>
        </li>
        <li className="hover:text-black">
          <Link
            to="Servicios"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            SERVICIOS
          </Link>
        </li>
        <li className="hover:text-black">
          <Link
            to="Contactos"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            CONTACTOS
          </Link>
        </li>
      </ul>
      <div className="cursor-pointer sm:hidden  " onClick={handleClick}>
        <img className="w-8" src={list} alt="list " />
      </div>
    </nav>
  );
};

export { Navbar };
