import { Scene } from "phaser";
import { Bomb } from "../../../entities/Bomb";
import { Wire } from "../../../entities/Wire";
import { BombStrategy } from "../BombStrategy";
import { WIRE_COLORS } from "../../../utils/Constants";
import { WiresFactory } from "../WiresFactory";

export class BombLevel10 implements BombStrategy {
  private scene: Scene;
  private wires: Wire[] = [];
  private bomb: Bomb;
  private hiddenWire: Phaser.GameObjects.Text;

  constructor(bomb: Bomb) {
    this.bomb = bomb;
    this.scene = bomb.scene;
    this.wires = WiresFactory.createThreeWires(this.bomb, [
      { color: WIRE_COLORS.GRAY, correct: false },
      { color: WIRE_COLORS.GRAY, correct: false },
      { color: WIRE_COLORS.GRAY, correct: false },
    ]);

    this.createHiddenWire();
  }

  public destroy(): void {
    this.wires.forEach(wire => wire.destroy(true));
    this.hiddenWire.destroy(true);
  }

  private createHiddenWire() {
    const centerX = this.scene.game.canvas.width / 2;
    const x = centerX - 53;
    const y = 50;

    this.hiddenWire = this.scene.add.text(x, y, "t", { color: "#ff0000" }).setOrigin(0.5);
    this.hiddenWire.setInteractive({ cursor: "pointer" });
    this.hiddenWire.on("pointerdown", () => this.bomb.defuse());

  }

}