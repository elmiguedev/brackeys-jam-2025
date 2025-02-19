import { Scene } from "phaser";
import { WIRE_COLORS } from "../utils/Constants";
import { Wire } from "./Wire";

export class Bomb {
  public onExplode: () => void;
  public onDefuse: () => void;

  private scene: Scene;
  private wires: Wire[] = [];
  private level: number = 0;

  private bombBoxSprite: Phaser.GameObjects.Image;


  constructor(scene: Phaser.Scene, level: number) {
    this.level = level;
    this.scene = scene;
    this.createBombBox();
    this.createWires();
  }

  public destroy() {
    this.bombBoxSprite.destroy();
    this.wires.forEach(wire => wire.destroy());
  }

  private createBombBox() {
    const x = this.scene.game.canvas.width / 2;
    const y = this.scene.game.canvas.height / 2;

    this.bombBoxSprite = this.scene.add.image(
      x,
      y,
      "bomb_box"
    );
  }

  private createWires() {
    if (this.level === 1) {
      const redWire = new Wire(this.scene, this.bombBoxSprite.x, this.bombBoxSprite.y, WIRE_COLORS.RED);
      redWire.onClick = () => { this.onDefuse(); };
      this.wires.push(redWire);
    }

    if (this.level === 2) {
      const xBase = 200;
      const redWire = new Wire(this.scene, xBase, this.bombBoxSprite.y, WIRE_COLORS.RED);
      const blueWire = new Wire(this.scene, xBase + 100, this.bombBoxSprite.y, WIRE_COLORS.BLUE);
      const greenWire = new Wire(this.scene, xBase + 200, this.bombBoxSprite.y, WIRE_COLORS.GREEN);

      redWire.onClick = () => { this.onDefuse(); };
      blueWire.onClick = () => { this.onExplode(); };
      greenWire.onClick = () => { this.onExplode(); };

      this.wires.push(redWire);
      this.wires.push(blueWire);
      this.wires.push(greenWire);
    }

    if (this.level === 3) {
      const xBase = 200;
      const redWire = new Wire(this.scene, xBase, this.bombBoxSprite.y, WIRE_COLORS.RED);
      const redWire2 = new Wire(this.scene, xBase + 100, this.bombBoxSprite.y, WIRE_COLORS.RED);
      const redWire3 = new Wire(this.scene, xBase + 200, this.bombBoxSprite.y, WIRE_COLORS.RED);

      redWire.onClick = () => { this.onDefuse(); };
      redWire2.onClick = () => { this.onDefuse(); };
      redWire3.onClick = () => { this.onDefuse(); };

      this.wires.push(redWire);
      this.wires.push(redWire2);
      this.wires.push(redWire3);
    }

    if (this.level === 4) {
      const xBase = 200;
      const cyanWire = new Wire(this.scene, xBase, this.bombBoxSprite.y, WIRE_COLORS.CYAN);
      const magentaWire = new Wire(this.scene, xBase + 100, this.bombBoxSprite.y, WIRE_COLORS.MAGENTA);
      const yellowWire = new Wire(this.scene, xBase + 200, this.bombBoxSprite.y, WIRE_COLORS.YELLOW);

      cyanWire.onClick = () => { this.onExplode(); };
      magentaWire.onClick = () => { this.onExplode(); };
      yellowWire.onClick = () => { this.onDefuse(); };
      yellowWire.setText("red");

      this.wires.push(cyanWire);
      this.wires.push(magentaWire);
      this.wires.push(yellowWire);
    }
  }
}