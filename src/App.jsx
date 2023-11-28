import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Hero/Main";
import { Section } from "./Components/Aboutme/Section";
import { Miexperiencia } from "./Components/Miexperiencia/Miexperiencia";
import { Miporfolio } from "./Components/Miporfolio/Miporfolio";
import { Misservicios } from "./Components/Misservicios/Misservicios";
import { Contactos } from "./Components/Contactos/Contactos";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Section />
      <Miexperiencia />
      <Miporfolio />
      <Misservicios />
      <Contactos />
      <Footer/>
    </>
  );
}

export default App;
