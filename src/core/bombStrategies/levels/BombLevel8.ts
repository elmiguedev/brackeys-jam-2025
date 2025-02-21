import { Scene } from "phaser";
import { Bomb } from "../../../entities/Bomb";
import { Wire } from "../../../entities/Wire";
import { BombStrategy } from "../BombStrategy";
import { WIRE_COLORS } from "../../../utils/Constants";
import { WiresFactory } from "../WiresFactory";

export class BombLevel8 implements BombStrategy {
  private scene: Scene;
  private wires: Wire[] = [];
  private bomb: Bomb;

  constructor(bomb: Bomb) {
    this.bomb = bomb;
    this.scene = bomb.scene;
    this.wires = WiresFactory.createThreeWires(this.bomb, [
      { color: WIRE_COLORS.WHITE, correct: true, label: "FF0000" },
      { color: WIRE_COLORS.WHITE, correct: false, label: "0000FF" },
      { color: WIRE_COLORS.WHITE, correct: false, label: "00FF00" },
    ]);
  }

  destroy(): void {
    this.wires.forEach(wire => wire.destroy(true));
  }
}