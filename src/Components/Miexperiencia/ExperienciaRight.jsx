import check from "../../assets/check2.svg";

const ExperienciaRight = () => {
  return (
    <div className="w-full md:mr-20">
      <div className="flex flex-col items-center font-mont text-sm md:flex-row md:items-start">
        <div className=" text-gray-500 pb-5 md:pr-20">
          <h6 className="text-lg">Behance</h6>
          <p>2021-2022</p>
        </div>
        <div className="hidden  pr-3 mt-2 h-40 border-r-2 border-dashed border-gray-400 md:flex md:relative md:max-[940px]:hidden  "></div>

        <div className="flex flex-col justify-center items-center text-gray-500 pb-5 md:ml-40 md:absolute md:justify-start md:items-start  md:gap-4 ">
          <img
            className="invisible mt-1 float-left md:visible md:absolute"
            src={check}
          />
          <h3 className="font-bold text-lg text-gray-700 md:ml-10 ">
            Diseño y estampados
          </h3>
          <p className="md:ml-10">Vertorizacion y estampados </p>
        </div>
      </div>
      <div className="flex flex-col items-center font-mont text-sm md:flex-row md:items-start">
        <div className=" text-gray-500 pb-5 md:pr-20">
          <h6 className="text-lg">Behance</h6>
          <p>2022-2023</p>
        </div>

        <div className="flex flex-col justify-center items-center text-gray-500 pb-5 md:ml-40 md:absolute md:justify-start md:items-start md:gap-4  ">
          <img
            className="invisible mt-1 float-left md:visible md:absolute "
            src={check}
          />
          <h3 className="font-bold text-lg text-gray-700 md:ml-10">
            Desarrollo de web
          </h3>
          <p className="md:ml-10">Desarrollo de paginas web </p>
        </div>
      </div>
    </div>
  );
};

export { ExperienciaRight };
