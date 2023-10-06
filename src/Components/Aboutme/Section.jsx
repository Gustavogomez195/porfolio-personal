import { Aboutme } from "./Aboutme";
import { Skill } from "./Skill";

const Section = () => {
  return (
    <>
      <section id="Sobremi" className="w-full mt-20 px-20 md:px-24  ">
        <h5 className=" text-center font-mont font-bold text-3xl text-gray-700  ">
          SOBRE MI
        </h5>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className=" border mb-1 w-10 border-gray-400"></div>
          <div className=" border mb-5 w-20 border-gray-400"></div>
        </div>
        <div className="flex flex-col md:flex-row ">
          <Aboutme />
          <Skill />
        </div>
      </section>
    </>
  );
};

export { Section };
