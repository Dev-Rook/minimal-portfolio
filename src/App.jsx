import React, {useState, useEffect} from "react";
import Styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import NavigationIcon from '@mui/icons-material/Navigation';

import Nav from "./Components/Main/Nav";
import SocialIconColumn from "./Components/SocialIconColumn";
import Landing from "./Pages/Landing";
// import Contact from "./Pages/Contact";

function App() {

  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={Styles.App}>
      <BrowserRouter>
        <Nav />
        <SocialIconColumn />
        <Routes>
          <Route path={"/"} element={<Landing />} />
          {/* <Route path={"Contact"} element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>

      <NavigationIcon
          onClick={scrollUp}
          sx={{fontSize: 30}}
          className={`${Styles.Back_To_Top_Icon} ${backToTop? Styles.Show_Back_To_Top : ""}`}
        />
    </div>
  );
}

export default App;
