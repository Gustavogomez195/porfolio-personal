const Footer = () => {
  return (
    <footer className="flex flex-col justify-between justify-center items-center font-mont text-gray-700 bg-stone-100 w-full h-12 px-24 md:flex-row px-15">
      <p className="text-sm">Copyright © 2023 Gustavo Gomez</p>
      <ul className="flex gap-5">
        <li className="hover:text-black cursor-pointer">Facebook</li>
        <li className="hover:text-black cursor-pointer">Twitter</li>
        <li className="hover:text-black cursor-pointer">Linkedin</li>
        <li className="hover:text-black cursor-pointer">Email</li>
      </ul>
    </footer>
  );
}

export { Footer };
