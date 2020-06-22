export const drums: object[] = [
  {
    id: 1,
    name: "808",
    sounds: {
      boom: "../sounds/808/boom.wav",
      clap: "../sounds/808/clap.wav",
      hihat: "../sounds/808/hihat.wav",
      kick: "../sounds/808/kick.wav",
      openhat: "../sounds/808/ride.wav",
      snare: "../sounds/808/snare.wav",
      tink: "../sounds/808/tom.wav"
    }
  }
];

export function getDrums() {
  return drums;
}