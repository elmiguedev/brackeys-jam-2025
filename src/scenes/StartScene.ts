import { Wire } from "../entities/Wire";
import { ENTITIES_DEPTH, WIRE_COLORS } from "../utils/Constants";

export default class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: "StartScene" });
  }

  public create() {
    this.createCamera();
    this.createTitle();
    this.createStartButton();
    this.createBackgroundSound();
  }

  private getCenter() {
    return {
      x: this.cameras.main.width / 2,
      y: this.cameras.main.height / 2
    }
  }

  private createCamera() {
    this.cameras.main.setBackgroundColor(0xffffff);
  }

  private createBackgroundSound() {
    if (this.sound.isPlaying("background_audio")) return;
    this.sound.add("background_audio", { loop: true }).play();
  }

  private createTitle() {
    const x = this.game.canvas.width / 2;
    const y = 50;
    const levelText = `Cut the RED wire`;
    this.add.text(
      x,
      y,
      levelText,
      {
        color: "#000000",
        fontFamily: "Tiny5",
        fontSize: "40px",
      }
    )
      .setOrigin(0.5)
  }

  private createStartButton() {
    const x = this.game.canvas.width / 2;
    const y = 300;
    const wire = new Wire(
      this,
      x,
      y,
      WIRE_COLORS.RED,
      ENTITIES_DEPTH.BOMB_WIRES
    );
    wire.onClick = () => this.scene.start("GameScene");
  }

}
