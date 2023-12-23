import "./App.css";
import Intro from "./component/intro/intro";
import Hover from "./component/hover/hover";
import About from "./component/about/about";
import Education from "./component/education/education";
import Skills from "./component/skills/skills";
import Projects from "./component/myProjects/projects";
import Footer from "./component/footer/footer";
import useLocalStorage from "use-local-storage";
import Clouds from "./component/cloudsBG/clouds";

function App() {
  const [theme, setTheme] = useLocalStorage("theme","light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="App" data-theme={theme}>
      <Clouds />
      <Hover switchTheme={switchTheme} theme={theme} />
      <Intro />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
