import { WIRE_COLORS } from "../utils/Constants";
import { Wire } from "./Wire";

export class Bomb extends Phaser.GameObjects.Sprite {

  private wires: Wire[];

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "bomb_box");
    this.scene.add.existing(this);
    this.createWires();
  }

  private createWires() {
    this.wires = [];
    const baseX = 200;

    this.wires.push(new Wire(
      this.scene,
      baseX,
      this.y,
      WIRE_COLORS.RED
    ))

    this.wires.push(new Wire(
      this.scene,
      baseX + 100,
      this.y,
      WIRE_COLORS.BLUE
    ))

    this.wires.push(new Wire(
      this.scene,
      baseX + 200,
      this.y,
      WIRE_COLORS.GREEN
    ))
  }
}