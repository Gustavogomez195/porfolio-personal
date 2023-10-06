const Skill = () => {
  return (
    <div className="w-full mt-10 flex md:flex justify-center ">
      <div className=" font-mont font-bold text-gray-500 mb-20 w-full sm:w-[400px] md:ml-20">
        <p className="flex justify-between">
          Diseño <span>80%</span>
        </p>
        <div className="mb-5">
          <div className="w-full h-2 rounded bg-gray-300">
            <div className="w-[80%] h-2 bg-gray-800 "></div>
          </div>
        </div>

        <p className="flex justify-between">
          Html & css <span>50%</span>
        </p>

        <div className="mb-5">
          <div className="w-full h-2 rounded bg-gray-300">
            <div className="w-[50%] h-2 bg-gray-800 "></div>
          </div>
        </div>

        <p className="flex justify-between">
          JavaScript<span>40%</span>
        </p>
        <div className="mb-5">
          <div className="w-full h-2 rounded bg-gray-300">
            <div className="w-[40%] h-2 bg-gray-800 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Skill };
