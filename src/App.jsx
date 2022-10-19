import Styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./Components/Main/Nav/Nav";
import SocialIconColumn from "./Components/Social-Icon-Column/SocialIconColumn";
import Landing from "./Pages/Landing";

function App() {
  return (
    <div className={Styles.App}>
      <BrowserRouter>
        <Nav />
        <SocialIconColumn />
        <Routes>
          <Route path={"/"} element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
