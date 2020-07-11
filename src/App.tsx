import React, { Component } from "react";
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

const SoundsContext = React.createContext({});
export const SoundConsumer = SoundsContext.Consumer;

export interface AppProps {
  kit: object[];
  onClick: () => void;
  onKeyDown: () => void;
  onKeyPress: () => void;
}

class App extends Component {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      kit: []
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const kitName = "808";
    this.setState({ kit: getDrumKitByName(kitName) });
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("click", this.handleClick);
  }

  getAppData = () => {
    return { kit: this.state };
  };

  handleClick = (e: any) => {
    const key = e.target.dataset.key;
    const pad = document.querySelector(
      `button[data-key="${key}"]`
    ) as HTMLButtonElement;

    const audio = document.querySelector(
      `audio[data-key="${key}"]`
    ) as HTMLAudioElement;

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
    pad.classList.add("playing");
  };

  handleKeyDown = (e: any) => {
    const key = e.keyCode || e.charCode;
    const pad = document.querySelector(
      `button[data-key="${key}"]`
    ) as HTMLButtonElement;
    const audio = document.querySelector(
      `audio[data-key="${key}"]`
    ) as HTMLAudioElement;

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
    pad.classList.add("playing");
  };

  setSoundPanel() {
    const { kit } = this.getAppData();
    const allSounds: object[] = Object.entries(kit).map(
      ([key, value]: any, index) => {
        return value["sounds"];
      }
    );
    const cleanedSounds = _.compact(allSounds);
    return cleanedSounds;
  }

  render() {
    const kit = this.setSoundPanel();
    return (
      <>
        <SoundsContext.Provider value={kit}>
          <div className="app">
            <Cable />
            <Header />
            <section className="app-panel">
              <div className="app-panel__controls">.</div>
              <div className="app-panel__controls">
                <div>
                  <DrumPadPanel value={kit} />
                </div>
              </div>
            </section>
          </div>
          <Footer />
        </SoundsContext.Provider>
      </>
    );
  }
}

export default App;
