import { Hero } from "./Hero";

const Main = () => {
  return (
    <main
      id="Inicio"
      className=" flex flex-col bg-stone-100  sm:flex-row px-20 "
    >
      <div className="  flex flex-col justify-center text-center mt-10 sm:px-100 sm:text-left sm:w-full ">
        <h4 className=" font-mont font-semibold text-[#919191] mb-2 mt-5">
          HOLA, MI NOMBRE ES
        </h4>
        <h1 className="font-mont font-bold text-[#a5893d] text-3xl mb-2 sm:text-5xl">
          GUSTAVO GOMEZ
        </h1>
        <p className="font-mont mb-10">
          Desarrollador Front-end, bienvenido a mi porfolio
        </p>
        <div className="flex justify-center sm:justify-start">
          <a
            className="flex items-center justify-center rounded text-white font-mont font-bold w-40 h-10 bg-gray-700 "
            href="#Porfolio"
          >
            Mis Trabajos
          </a>
        </div>
      </div>
      <Hero />
    </main>
  );
};

export { Main };
