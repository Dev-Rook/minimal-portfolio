import Styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./Pages/Landing";

function App() {
  return (
    <div className={Styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
