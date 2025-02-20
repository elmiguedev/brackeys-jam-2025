import { WIRE_COLORS } from "../utils/Constants";

export class Wire extends Phaser.GameObjects.Sprite {
  public onClick: () => void;
  public onHover: () => void;
  public color: number;
  private label: Phaser.GameObjects.Text;

  constructor(scene: Phaser.Scene, x: number, y: number, color: number) {
    super(scene, x, y, "wire");
    this.scene.add.existing(this);
    this.color = color;
    this.setInteractive({ cursor: "pointer" });
    this.on("pointerup", (e) => this.onClick());
    this.on("pointerover", () => this.onHover());
    this.setTint(color);
  }

  public setRandomColor() {
    const colors_len = Object.keys(WIRE_COLORS).length;
    const randomIndex = Math.floor(Math.random() * colors_len);
    this.color = Object.values(WIRE_COLORS)[randomIndex];
    this.setTint(this.color);
  }

  public setText(text: string, color?: string) {
    this.label = this.scene.add.text(this.x, this.y, text, { color: color || "#000000" });
    this.label.setOrigin(0.5, 0.5);
    this.label.setAngle(90);
  }

}