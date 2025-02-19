import { WIRE_COLORS } from "../utils/Constants";

export class Wire extends Phaser.GameObjects.Sprite {
  public onClick: () => void;
  private color: number;
  private label: Phaser.GameObjects.Text;

  constructor(scene: Phaser.Scene, x: number, y: number, color: number) {
    super(scene, x, y, "wire");
    this.scene.add.existing(this);
    this.color = color;
    this.setInteractive({ cursor: "pointer" });
    this.on("pointerdown", () => this.onClick());
    this.setTint(color);
  }

  public setText(text: string) {
    this.label = this.scene.add.text(this.x, this.y, text, { color: "#000000" });
    this.label.setOrigin(0.5, 0.5);
    this.label.setAngle(90);
  }

}