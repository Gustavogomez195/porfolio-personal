import { RiPhoneFill } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillBank } from "react-icons/ai";

const ContactoLeft = () => {
  return (
    <div className="w-1/2 text-gray-500 font-mont ">
      <p className="  pb-5 text-center  mt-5 md:mt-0 md:text-start">
        Estoy encantado/a de que estés interesado/a en ponerse en contacto
        conmigo. Estoy disponible y dispuesto/a para responder a tus preguntas,
        escuchar tus comentarios o discutir cualquier asunto que tengas en
        mente.
      </p>

      <ul className="flex flex-col gap-5  ">
        <li>
          <div className="rounded-full border p-3 border-gray-500 float-left mr-5 ">
            <RiPhoneFill />
          </div>
          <p>Telefono</p>
          <p>3755525263</p>
        </li>
        <li>
          <div className="rounded-full border p-3 border-gray-500 float-left mr-5">
            <AiOutlineMail />
          </div>
          <p>Email</p>
          <p>gustavogomez195@gmail.com</p>
        </li>
        <li>
          <div className="rounded-full border p-3 border-gray-500 float-left mr-5 ">
            <AiFillBank />
          </div>
          <p>Locacion</p>
          <p>Obera Misiones Argentina </p>
        </li>
      </ul>
    </div>
  );
};

export { ContactoLeft };
