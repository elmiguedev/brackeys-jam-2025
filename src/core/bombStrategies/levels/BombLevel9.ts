import { Scene } from "phaser";
import { Bomb } from "../../../entities/Bomb";
import { Wire } from "../../../entities/Wire";
import { BombStrategy } from "../BombStrategy";
import { WIRE_COLORS } from "../../../utils/Constants";
import { WiresFactory } from "../WiresFactory";

export class BombLevel9 implements BombStrategy {
  private scene: Scene;
  private wires: Wire[] = [];
  private bomb: Bomb;
  private timer: Phaser.Time.TimerEvent;

  constructor(bomb: Bomb) {
    this.bomb = bomb;
    this.scene = bomb.scene;
    this.wires = WiresFactory.createThreeWires(this.bomb, [
      { color: WIRE_COLORS.GRAY, correct: true },
      { color: WIRE_COLORS.GRAY, correct: true },
      { color: WIRE_COLORS.GRAY, correct: true },
    ]);

    this.timer = this.scene.time.addEvent({
      delay: 500,
      loop: true,
      callback: () => {
        this.wires.forEach(wire => {
          wire.setRandomColor();
          if (wire.color === WIRE_COLORS.RED) {
            wire.onClick = () => {
              this.bomb.defuse();
            };
          } else {
            wire.onClick = () => {
              this.bomb.explode();
            };
          }
        });
      },
    });
  }

  destroy(): void {
    this.wires.forEach(wire => wire.destroy(true));
    this.timer.destroy();
  }
}