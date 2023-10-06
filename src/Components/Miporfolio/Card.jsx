import github from "../../assets/github.svg";
import link from "../../assets/link.svg";

const Card = ({ titles, subtitles, images }) => {
  return (
    <div className="flex flex-col w-full items-center  justify-center">
      <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
        <img
          className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 group-hover:opacity-30"
          src={images}
          alt=""
        />

        <div className="absolute inset-0 flex items-center justify-center z-10 px-9 gap-5 translate-y-[60%] group-hover:translate-y-0 transition-all duration-500 ">
          <a href="#">
            <img className="w-7 hover:opacity-50 " src={github} />
          </a>
          <a href="#">
            <img className="w-7 hover:opacity-50  " src={link} />
          </a>
        </div>
        <div className="absolute flex flex-col inset-0 items-center justify-center px-9 pt-5 translate-y-[60%] group-hover:translate-y-12 transition-all duration-500  ">
          <h5 className="font-mont text-lg">{titles}</h5>
          <p className="font-mont text-sm">{subtitles}</p>
        </div>
      </div>
    </div>
  );
};

export { Card };
