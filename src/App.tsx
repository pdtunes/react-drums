import React, { useState, useEffect } from "react";
import { SoundProvider } from "./context/SoundBankContext";
import ReactGa from "react-ga";
import LogRocket from "logrocket";
import _ from "lodash";
import { getDrumKitByName } from "./data/drums";
import Header from "./components/header";
import DrumPadPanel from "./components/drumPadPanel";
import Footer from "./components/footer";
import Cable from "./components/common/cable";

require("dotenv").config();

ReactGa.initialize(`${process.env.REACT_APP_GOOGLE_ANALYTICS}`);
ReactGa.pageview(window.location.pathname + window.location.search);
LogRocket.init(`${process.env.REACT_APP_LOG_ROCKET_ID}/react-drum-maschine`);

export interface AppProps {
  kit: object[];
  onClick: () => void;
  onKeyDown: () => void;
  onKeyPress: () => void;
}

const App = (props: any) => {
  const [sounds, setSounds] = useState({});
  const kitName = "808";
  const kit = getDrumKitByName(kitName);
  setSounds(kit);

  return (
    <>
      <div className="app">
        <Cable />
        <Header />
        <section className="app-panel">
          <div className="app-panel__controls">.</div>
          <div className="app-panel__controls">
            <div>app</div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default App;
