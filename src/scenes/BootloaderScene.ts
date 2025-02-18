import ExamplePng from "../assets/img/exmaple.png";
import TitlePng from "../assets/img/start/title.png";
import StartButtonPng from "../assets/img/start/start_button.png";
export default class BootloaderScene extends Phaser.Scene {
  constructor() {
    super({ key: "BootloaderScene" });
  }

  public preload() {
    this.load.image("example", ExamplePng);
    this.load.image("title", TitlePng);
    this.load.image("start_button", StartButtonPng);
    this.load.on("complete", () => this.scene.start("StartScene"));
  }
}
