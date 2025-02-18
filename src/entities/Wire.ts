
export class Wire extends Phaser.GameObjects.Sprite {

  constructor(scene: Phaser.Scene, x: number, y: number, color: number) {
    super(scene, x, y, "wire");
    this.scene.add.existing(this);
    this.setInteractive({ cursor: "pointer" });
    this.setTint(color);
  }
}