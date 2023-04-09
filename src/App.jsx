import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        {" "}
        {/*To-do*/}
        <div>
          {" "}
          {/*To-do*/}
          <Navbar />
          <Hero />
        </div>
        {/* <About />
        <Experience />
        <Tech />
        <Works /> */}
        <Feedbacks />
        <div>
          {/*To-do*/}
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
