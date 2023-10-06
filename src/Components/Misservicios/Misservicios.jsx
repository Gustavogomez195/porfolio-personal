import { Cardservicios } from "./Cardservicios";
import corazon from "../../assets/heart.svg";
import desktop from "../../assets/display.svg";
import archivo from "../../assets/filetype-jsx.svg";
import cross from "../../assets/crosshair.svg";

const Misservicios = () => {
  const servicios = [
    {
      id: 1,
      title: "UX-UI DISEÑO ",
      subtitle: "descripcion de los servicios ",
      icon: corazon,
    },
    {
      id: 2,
      title: "DISEÑO WEB ",
      subtitle: "descripcion de los servicios ",
      icon: desktop,
    },
    {
      id: 3,
      title: " DISEÑO MINIMALISTA",
      subtitle: "descripcion de los servicios ",
      icon: archivo,
    },
    {
      id: 4,
      title: "MANTENIMIENTO ",
      subtitle: "descripcion de los servicios ",
      icon: cross,
    },
  ];
  return (
    <section id="Servicios" className="pb-24 w-full bg-stone-100">
      <h3 className="pt-20 text-center font-mont font-bold text-3xl text-gray-700">
        MIS SERVICIOS
      </h3>
      <div className="flex flex-col justify-center items-center mt-5">
        <div className=" border mb-1 w-10 border-gray-400"></div>
        <div className=" border mb-5 w-20 border-gray-400"></div>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 mx-15 mt-10 md:flex-row md:mx-20 md:gap-3">
        {servicios.map((servicio) => (
          <div key={servicio.id}>
            <Cardservicios
              title={servicio.title}
              subtitle={servicio.subtitle}
              icon={servicio.icon}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export { Misservicios };
