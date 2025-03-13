import { SCALE_FACTOR, WIRE_COLORS, WIRE_CURSOR } from "../utils/Constants";

export class Wire extends Phaser.GameObjects.Sprite {
  public onClick: () => void;
  public onHover: () => void;
  public color: number;
  private label: Phaser.GameObjects.Text;
  private tucAudio: Phaser.Sound.BaseSound;

  constructor(scene: Phaser.Scene, x: number, y: number, color: number, depth: number) {
    super(scene, x, y, "wire");
    this.tucAudio = this.scene.sound.add("tuc_audio");
    this.scene.add.existing(this);
    this.color = color;
    this.setInteractive({ cursor: WIRE_CURSOR });
    this.on("pointerdown", (e) => this.onClick && this.onClick());
    this.on("pointerover", () => {
      this.tucAudio.play();
      this.onHover && this.onHover()
    });
    this.setTint(color);
    this.setDepth(depth);
    this.setScale(SCALE_FACTOR);
  }

  public setRandomColor() {
    const colors_len = Object.keys(WIRE_COLORS).length;
    const randomIndex = Math.floor(Math.random() * colors_len);
    this.color = Object.values(WIRE_COLORS)[randomIndex];
    this.setTint(this.color);
  }

  public setText(text: string, color?: string) {
    this.label = this.scene.add.text(
      this.x,
      this.y,
      text,
      {
        fontFamily: "Tiny5",
        fontSize: "26px",
        color: color || "#000000"
      }
    );
    this.label.setOrigin(0.5, 0.5);
    this.label.setAngle(90);
    this.label.setDepth(this.depth + 1);
  }

  public destroy(fromScene?: boolean): void {
    super.destroy(fromScene);
    this.label && this.label.destroy(fromScene);
  }

}