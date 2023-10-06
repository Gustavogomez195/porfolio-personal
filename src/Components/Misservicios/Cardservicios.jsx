const Cardservicios = ({ title, subtitle, icon }) => {
  return (
    <div className=" overlay-hidden group w-60 h-72 gap-5 px-5 rounded border-gray-300 flex flex-col justify-center items-center text-gray-400 shadow-[0_0px_8px_-1px_rgba(0,0,0,0.2)]  hover:shadow-xl group-hover:scale-y-100 duration-500  md:w-72">
      <div className=" rounded-full border border-gray-400 p-2 group-hover:bg-black duration-500  ">
        <img src={icon} className=" group-hover:text-white " />
      </div>

      <p className="font-mont">{title}</p>
      <div className=" border mb-1 w-10 border-gray-400"></div>
      <p className="font-mont text-center">{subtitle}</p>
    </div>
  );
};

export { Cardservicios };
