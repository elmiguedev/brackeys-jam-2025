import ExamplePng from "../assets/img/exmaple.png";

export default class BootloaderScene extends Phaser.Scene {
  constructor() {
    super({ key: "BootloaderScene" });
  }

  public preload() {
    this.load.image("example", ExamplePng);
    this.load.on("complete", () => this.scene.start("StartScene"));
  }
}
