import { Scene } from "phaser";
import { Bomb } from "../../../entities/Bomb";
import { Wire } from "../../../entities/Wire";
import { BombStrategy } from "../BombStrategy";
import { WIRE_COLORS } from "../../../utils/Constants";
import { WiresFactory } from "../WiresFactory";

export class BombLevel12 implements BombStrategy {
  private scene: Scene;
  private wires: Wire[] = [];
  private bomb: Bomb;

  constructor(bomb: Bomb) {
    this.bomb = bomb;
    this.scene = bomb.scene;
    this.wires = WiresFactory.createThreeWires(this.bomb, [
      { color: WIRE_COLORS.GRAY, correct: false },
      { color: WIRE_COLORS.GRAY, correct: false },
      { color: WIRE_COLORS.GRAY, correct: true },
    ]);

    this.createSound();
  }

  public destroy(): void {
    this.wires.forEach(wire => wire.destroy(true));
  }

  private createSound() {
    this.wires[this.wires.length - 1].onHover = () => {
      this.scene.sound.play("red_audio");

    }
  }

}