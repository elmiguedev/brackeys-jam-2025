import ExamplePng from "../assets/img/exmaple.png";
import TitlePng from "../assets/img/start/title.png";
import StartButtonPng from "../assets/img/start/start_button.png";
import WirePng from "../assets/img/game/wire.png";
import BombBoxPng from "../assets/img/game/bomb_box.png";
import BombInnerBoxPng from "../assets/img/game/bomb_inner_box.png";
import ScrewPng from "../assets/img/game/screw.png";
import RedOgg from "../assets/sound/red.ogg";

export default class BootloaderScene extends Phaser.Scene {
  constructor() {
    super({ key: "BootloaderScene" });
  }

  public preload() {
    this.createCamera();
    this.load.image("example", ExamplePng);
    this.load.image("title", TitlePng);
    this.load.image("start_button", StartButtonPng);
    this.load.image("wire", WirePng);
    this.load.image("bomb_box", BombBoxPng);
    this.load.image("bomb_inner_box", BombInnerBoxPng);
    this.load.image("screw", ScrewPng);
    this.load.audio("red_audio", RedOgg);
    this.load.on("complete", () => this.scene.start("StartScene"));
  }

  private createCamera() {
    this.cameras.main.setBackgroundColor(0xffffff);
  }
}
