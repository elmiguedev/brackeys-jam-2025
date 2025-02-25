import { Scene } from "phaser";
import { Bomb } from "../../../entities/Bomb";
import { Wire } from "../../../entities/Wire";
import { BombStrategy } from "../BombStrategy";
import { WIRE_COLORS } from "../../../utils/Constants";
import { WiresFactory } from "../WiresFactory";

export class BombLevel13 implements BombStrategy {
  private scene: Scene;
  private wires: Wire[] = [];
  private bomb: Bomb;

  constructor(bomb: Bomb) {
    this.bomb = bomb;
    this.scene = bomb.scene;
    this.wires = WiresFactory.createThreeWires(this.bomb, [
      { color: WIRE_COLORS.GRAY, correct: false },
      { color: WIRE_COLORS.GRAY, correct: false },
      { color: WIRE_COLORS.GRAY, correct: false },
    ]);

    this.bomb.screws.bottomLeft.on("pointerdown", () => {
      this.bomb.screws.bottomLeft.rotate();
    });
    this.bomb.screws.bottomRight.on("pointerdown", () => {
      this.bomb.screws.bottomRight.rotate();
    });
    this.bomb.screws.topLeft.on("pointerdown", () => {
      this.bomb.screws.topLeft.rotate();
    });
    this.bomb.screws.topRight.on("pointerdown", () => {
      this.bomb.screws.topRight.rotate();
    });

    this.bomb.screws.bottomLeft.setInteractive({ cursor: "pointer" });

    this.bomb.screws.bottomLeft.onLimit = () => {
      this.bomb.screws.topRight.setInteractive({ cursor: "pointer" });
    }

    this.bomb.screws.topRight.onLimit = () => {
      this.bomb.screws.bottomRight.setInteractive({ cursor: "pointer" });
    }

    this.bomb.screws.bottomRight.onLimit = () => {
      this.bomb.screws.topLeft.setInteractive({ cursor: "pointer" });
    }


    this.bomb.screws.topLeft.onLimit = () => {
      this.bomb.openBox();
      this.wires.forEach(wire => wire.destroy(true));
      this.wires = WiresFactory.createSingleWire(
        this.bomb,
        {
          color: WIRE_COLORS.RED,
          correct: true
        }
      )
    }
  }

  public destroy(): void {
    this.wires.forEach(wire => wire.destroy(true));
  }


}