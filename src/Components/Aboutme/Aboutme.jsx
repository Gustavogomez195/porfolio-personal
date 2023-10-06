const Aboutme = () => {
  return (
    <div className="w-full h-fit mt-10 font-mont">
      <h6 className="font-bold text-gray-700 text-2xl mb-5 text-center md:text-left">
        !Hola!
      </h6>
      <p className="text-gray-600 text-center mb-10 md:text-left ">
        Soy Gustavo de Obera Misiones Argentina, desarrollador frontend con
        habilidades sólidas en la creación de interfaces interactivas y
        atractivas
      </p>
      <div className="flex justify-center md:justify-start">
        <a
          className="flex items-center justify-center rounded text-white font-mont font-bold w-40 h-10 mb-20 bg-gray-700"
          href="#"
          download="curriculum"
        >
          Descargar Cv{" "}
        </a>
      </div>
    </div>
  );
};

export { Aboutme };
