import perfil from "../../assets/gustavo-perfil1.png";
import flecha from "../../assets/arrow-down.svg";

const Hero = () => {
  return (
    <>
      <div className="flex items-end mb-28 hidden md:flex md:mr-20">
        <img className="w-10 h-10 animate-bounce" src={flecha} />
      </div>
      <div className=" w-full ">
        <img src={perfil} alt="perfil" />
      </div>
    </>
  );
};

export { Hero };
