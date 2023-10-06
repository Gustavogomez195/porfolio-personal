import { ExperienciaLeft } from "./ExperienciaLeft";
import { ExperienciaRight } from "./ExperienciaRight";

const Miexperiencia = () => {
  return (
    <>
      <section id="Miexperiencia" className=" bg-stone-100 ">
        <h3 className="pt-20 text-center font-mont font-bold text-3xl text-gray-700">
          MI EXPERIENCIA
        </h3>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className=" border mb-1 w-10 border-gray-400"></div>
          <div className=" border mb-5 w-20 border-gray-400"></div>
        </div>
        <div className="flex flex-col mx-15 mt-7 pb-24 md:gap-20 md:flex-row md:mx-24 md:max-[945px]:flex-col ">
          <ExperienciaLeft />
          <ExperienciaRight />
        </div>
      </section>
    </>
  );
};

export { Miexperiencia };
