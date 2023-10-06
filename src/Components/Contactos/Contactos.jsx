import { ContactoLeft } from "./ContactoLeft";
import { ContactForm } from "./Form";

const Contactos = () => {
  return (
    <section id="Contactos" className=" mx-15 mb-24 md:mx-24 ">
      <div>
        <h3 className=" text-center pt-20 font-mont font-bold text-3xl text-gray-700 md:text-start">
          CONTACTAME
        </h3>
        <div className="flex flex-col justify-center items-center mt-5 md:items-start md:justify-start">
          <div className=" border mb-1 w-10 border-gray-400"></div>
          <div className=" border mb-5 w-20 border-gray-400 "></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-10 md:flex-row ">
        <ContactoLeft />
        <ContactForm />
      </div>
    </section>
  );
};

export { Contactos };
