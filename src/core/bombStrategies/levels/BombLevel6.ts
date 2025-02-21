import { Scene } from "phaser";
import { Bomb } from "../../../entities/Bomb";
import { Wire } from "../../../entities/Wire";
import { BombStrategy } from "../BombStrategy";
import { WIRE_COLORS } from "../../../utils/Constants";
import { WiresFactory } from "../WiresFactory";

export class BombLevel6 implements BombStrategy {
  private scene: Scene;
  private wires: Wire[] = [];
  private bomb: Bomb;

  constructor(bomb: Bomb) {
    this.bomb = bomb;
    this.scene = bomb.scene;
    this.wires = WiresFactory.createThreeWires(this.bomb, [
      { color: WIRE_COLORS.GRAY, correct: false, label: "blue", labelColor: "red" },
      { color: WIRE_COLORS.GRAY, correct: false, label: "green", labelColor: "blue" },
      { color: WIRE_COLORS.GRAY, correct: true, label: "red", labelColor: "green" },
    ]);
  }

  destroy(): void {
    this.wires.forEach(wire => wire.destroy(true));
  }
}