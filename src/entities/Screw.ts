import { ENTITIES_DEPTH, SCREW_LIMIT } from "../utils/Constants";

export class Screw extends Phaser.GameObjects.Sprite {
  public onLimit?: () => void;

  private canRotate: boolean = true;
  private limit: number = SCREW_LIMIT;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "screw");
    this.scene.add.existing(this);
    this.setDepth(ENTITIES_DEPTH.BOMB_SCREWS)
  }

  public rotate() {
    if (!this.canRotate) return;
    this.canRotate = false;
    this.scene.add.tween({
      targets: this,
      angle: this.angle + 90,
      duration: 500,
      onComplete: () => {
        this.canRotate = true;
        this.limit--;
        if (this.limit === 0) {
          this.onLimit && this.onLimit();
          this.destroy(true);
        }
      }
    })
  }

}