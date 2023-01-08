import "./App.css"
import Header from './components/header/Header';
import Hero from './components/hero/Hero';


import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



function App() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="App">
      <button
        type="button"
        onClick={scrollToTop}
        className="block fixed right-[10%] lg:right-[3%] bottom-[3%] lg:bottom-[5%] h-12 w-12 z-40  group bg-slate-200 animate-bounce  transition duration-300 ease-in-out items-center rounded-full p-3 shadow-xl"
      >
        <FontAwesomeIcon  icon={faArrowUp} />
      </button>


     




      <Hero />

    </div>
  );
}

export default App;
