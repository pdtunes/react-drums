import React from "react";
import Pad from "./common/pad";
import { SoundConsumer } from "../App";

export interface Props {
  props: object;
  value: object;
}

const DrumPadPanel = (props: any) => {
  const sounds = props.value;
  console.log(sounds);
  const pads = !sounds
    ? "Loading..."
    : sounds.map((sound: any) => {
        console.log(">", sound);
        return <Pad sound={sound} />;
      });
  return <h1>hi</h1>;
};

export default DrumPadPanel;
