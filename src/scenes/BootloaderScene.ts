import ExamplePng from "../assets/img/exmaple.png";
import TitlePng from "../assets/img/start/title.png";
import StartButtonPng from "../assets/img/start/start_button.png";
import WirePng from "../assets/img/game/bomb/wire.png";
import BombBoxPng from "../assets/img/game/bomb/box.png";
import BombInnerBoxPng from "../assets/img/game/bomb/inner-box.png";
import ScrewPng from "../assets/img/game/bomb/screw.png";
import RedOgg from "../assets/sound/red.ogg";
import BombTickOgg from "../assets/sound/bomb_tick.ogg";
import BombDisarmingOgg from "../assets/sound/bomb_disarming.ogg";
import BombNeutralizedOgg from "../assets/sound/bomb_neutralized.ogg";
import BombExplodeOgg from "../assets/sound/bomb_explode.ogg";
import BackgroundOgg from "../assets/sound/background.ogg";
import TucOgg from "../assets/sound/tuc.ogg";
import ScrewOgg from "../assets/sound/screw.ogg";
import WireCutterOpenPng from "../assets/img/game/wire_cutter_open.png";
import WireCutterClosePng from "../assets/img/game/wire_cutter_close.png";

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
    this.load.image("wire_cutter_open", WireCutterOpenPng);
    this.load.image("wire_cutter_close", WireCutterClosePng);
    this.load.audio("red_audio", RedOgg);
    this.load.audio("bomb_tick_audio", BombTickOgg);
    this.load.audio("bomb_neutralized_audio", BombNeutralizedOgg);
    this.load.audio("bomb_disarming_audio", BombDisarmingOgg);
    this.load.audio("bomb_explode_audio", BombExplodeOgg);
    this.load.audio("background_audio", BackgroundOgg);
    this.load.audio("tuc_audio", TucOgg);
    this.load.audio("screw_audio", ScrewOgg);
    this.load.on("complete", () => this.scene.start("StartScene"));
  }

  private createCamera() {
    this.cameras.main.setBackgroundColor(0xffffff);
  }
}
