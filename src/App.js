import "./App.css";
import Intro from "./component/intro/intro";
import Hover from "./component/hover/hover";
import About from "./component/about/about";
import Education from "./component/education/education";
import Skills from "./component/skills/skills";
import Projects from "./component/myProjects/projects";
import Footer from "./component/footer/footer";
import useLocalStorage from "use-local-storage";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "light" : "dark");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="App" data-theme={theme}>
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
