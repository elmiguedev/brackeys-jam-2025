import { Scene } from "phaser";
import { Bomb } from "../../../entities/Bomb";
import { Wire } from "../../../entities/Wire";
import { BombStrategy } from "../BombStrategy";
import { WIRE_COLORS } from "../../../utils/Constants";
import { WiresFactory } from "../WiresFactory";

export class BombLevel4 implements BombStrategy {
  private scene: Scene;
  private wires: Wire[] = [];
  private bomb: Bomb;

  constructor(bomb: Bomb) {
    this.bomb = bomb;
    this.scene = bomb.scene;
    this.wires = WiresFactory.createThreeWires(this.bomb, [
      { color: WIRE_COLORS.CYAN, correct: false },
      { color: WIRE_COLORS.MAGENTA, correct: false },
      { color: WIRE_COLORS.YELLOW, correct: true, label: "red" },
    ]);
  }

  destroy(): void {
    this.wires.forEach(wire => wire.destroy(true));
  }
}