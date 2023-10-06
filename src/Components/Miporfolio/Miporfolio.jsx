import { Card } from "./Card";
import { Menuporfolio } from "./Menuporfolio";
import Silla from "../../assets/silla.jpg";

import vinos from "../../assets/vinos.jpg";
import produ from "../../assets/produ.jpg";
import auris from "../../assets/auris.jpg";

const Miporfolio = () => {
  const cards = [
    {
      id: 1,
      title: "Proyecto-1",
      subtitle: "Informacion sobre el proyecto 1",
      image: Silla,
    },
    {
      id: 2,
      title: "Proyecto-2",
      subtitle: "Informacion sobre el proyecto 2",
      image: auris,
    },
    {
      id: 3,
      title: "Proyecto-3",
      subtitle: "Informacion sobre el proyecto 3",
      image: vinos,
    },
    {
      id: 4,
      title: "Proyecto-4",
      subtitle: "Informacion sobre el proyecto 4",
      image: produ,
    },
    {
      id: 5,
      title: "Proyecto-5",
      subtitle: "Informacion sobre el proyecto 5",
      image: Silla,
    },
    {
      id: 6,
      title: "Proyecto-6",
      subtitle: "Informacion sobre el proyecto 6",
      image: produ,
    },
  ];
  return (
    <section id="Porfolio" className="mx-10 mb-24 md:mx-24">
      <h3 className="pt-20 text-center font-mont font-bold text-3xl text-gray-700">
        MI PORFOLIO
      </h3>
      <div className="flex flex-col justify-center items-center mt-5">
        <div className=" border mb-1 w-10 border-gray-400"></div>
        <div className=" border mb-5 w-20 border-gray-400"></div>
      </div>
      <Menuporfolio />
      <div className="flex flex-col gap-5 sm:grid grid-cols-2 md:grid-cols-3">
        {cards.map((card) => (
          <div key={card.id}>
            <Card
              titles={card.title}
              subtitles={card.subtitle}
              images={card.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export { Miporfolio };
