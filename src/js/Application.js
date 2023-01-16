import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
  }

  addBananas() {}
}
const emojis = ["🐒", "🐒", "🐒"];

function addBananas(emojis) {
  return emojis.map((emoji) => `${emoji}🍌`);
}

function setEmojis(emojis) {
  const wrapperDiv = document.getElementById("emojis");
  wrapperDiv.innerHTML = ""; // Clear the content of the wrapper div

  emojis.forEach((emoji) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = emoji;
    wrapperDiv.appendChild(paragraph);
  });
}

const emojisWithBananas = addBananas(emojis);
setEmojis(emojisWithBananas);
