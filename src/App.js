import { Fragment } from "react";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <div>
        <Home />
      </div> 
      <Footer />
    </Fragment>
  );
}

export default App;
