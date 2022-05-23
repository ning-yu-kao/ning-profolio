import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import {Helmet} from "react-helmet";
import Contact2 from "./components/Contact2";

function App() {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Ning-Yu | Official Website</title>
                <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact2 />
    </div>
  );
}

export default App;
