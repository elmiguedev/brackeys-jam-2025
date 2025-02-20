import { Scene } from "phaser";
import { WIRE_COLORS } from "../utils/Constants";
import { Wire } from "./Wire";

export class Bomb {
  public onExplode: () => void;
  public onDefuse: () => void;

  private scene: Scene;
  private wires: Wire[] = [];
  private level: number = 0;
  private stuff: Phaser.GameObjects.Group;

  private levelTitle: Phaser.GameObjects.Text;
  private bombBoxSprite: Phaser.GameObjects.Image;


  constructor(scene: Phaser.Scene, level: number) {
    this.level = level;
    this.scene = scene;
    this.stuff = this.scene.add.group();
    this.createBombBox();
    this.createLevelText();
    this.createWires();
  }

  public destroy() {
    this.bombBoxSprite.destroy(true)
    this.wires.forEach(wire => wire.destroy(true));
    this.levelTitle.destroy(true);
    this.stuff.destroy(true);
  }

  private createLevelText() {
    const x = this.scene.game.canvas.width / 2;
    const y = 50;
    const levelText = `Cut the RED wire`;

    this.levelTitle = this.scene.add.text(x, y, levelText, { color: "#000000" }).setOrigin(0.5);
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

    if (this.level === 5) {
      const xBase = 200;
      const redWire = new Wire(this.scene, xBase, this.bombBoxSprite.y, WIRE_COLORS.RED);
      const blueWire = new Wire(this.scene, xBase + 100, this.bombBoxSprite.y, WIRE_COLORS.BLUE);
      const greenWire = new Wire(this.scene, xBase + 200, this.bombBoxSprite.y, WIRE_COLORS.GREEN);

      redWire.onClick = () => { this.onDefuse(); };
      blueWire.onClick = () => { this.onExplode(); };
      greenWire.onClick = () => { this.onExplode(); };
      blueWire.setText("red", "white");

      // IDEA: le podriamos poner un "are you sure??"

      this.wires.push(redWire);
      this.wires.push(blueWire);
      this.wires.push(greenWire);
    }

    if (this.level === 6) {
      const xBase = 200;
      const w1 = new Wire(this.scene, xBase, this.bombBoxSprite.y, WIRE_COLORS.GRAY);
      const w2 = new Wire(this.scene, xBase + 100, this.bombBoxSprite.y, WIRE_COLORS.GRAY);
      const w3 = new Wire(this.scene, xBase + 200, this.bombBoxSprite.y, WIRE_COLORS.GRAY);

      w1.onClick = () => { this.onExplode(); };
      w2.onClick = () => { this.onExplode(); };
      w3.onClick = () => { this.onDefuse(); };
      w1.setText("blue", "red");
      w2.setText("green", "blue");
      w3.setText("red", "green");

      // IDEA: le podriamos poner un "are you sure??"

      this.wires.push(w1);
      this.wires.push(w2);
      this.wires.push(w3);
    }

    if (this.level === 7) {
      const xBase = 200;
      const w1 = new Wire(this.scene, xBase, this.bombBoxSprite.y, 0xff3535);
      const w2 = new Wire(this.scene, xBase + 100, this.bombBoxSprite.y, WIRE_COLORS.RED);
      const w3 = new Wire(this.scene, xBase + 200, this.bombBoxSprite.y, 0xff4444);

      w1.onClick = () => { this.onExplode(); };
      w2.onClick = () => { this.onDefuse(); };
      w3.onClick = () => { this.onExplode(); };

      // IDEA: le podriamos poner un "are you sure??"

      this.wires.push(w1);
      this.wires.push(w2);
      this.wires.push(w3);
    }

    if (this.level === 8) {
      const xBase = 200;
      const w1 = new Wire(this.scene, xBase, this.bombBoxSprite.y, WIRE_COLORS.WHITE);
      const w2 = new Wire(this.scene, xBase + 100, this.bombBoxSprite.y, WIRE_COLORS.WHITE);
      const w3 = new Wire(this.scene, xBase + 200, this.bombBoxSprite.y, WIRE_COLORS.WHITE);

      w1.onClick = () => { this.onDefuse(); };
      w2.onClick = () => { this.onExplode(); };
      w3.onClick = () => { this.onExplode(); };

      w1.setText("#FF0000");
      w2.setText("#0000FF");
      w3.setText("#00FF00");

      // IDEA: le podriamos poner un "are you sure??"

      this.wires.push(w1);
      this.wires.push(w2);
      this.wires.push(w3);
    }

    if (this.level === 9) {
      const xBase = 200;
      const w1 = new Wire(this.scene, xBase, this.bombBoxSprite.y, WIRE_COLORS.GRAY);
      const w2 = new Wire(this.scene, xBase + 100, this.bombBoxSprite.y, WIRE_COLORS.GRAY);
      const w3 = new Wire(this.scene, xBase + 200, this.bombBoxSprite.y, WIRE_COLORS.GRAY);

      w1.onClick = () => {
        if (w1.color === WIRE_COLORS.RED) {
          this.onDefuse();
        } else {
          this.onExplode();
        }
      };
      w2.onClick = () => {
        if (w2.color === WIRE_COLORS.RED) {
          this.onDefuse();
        } else {
          this.onExplode();
        }
      };
      w3.onClick = () => {
        if (w3.color === WIRE_COLORS.RED) {
          this.onDefuse();
        } else {
          this.onExplode();
        }
      };

      // IDEA: le podriamos poner un "are you sure??"

      this.wires.push(w1);
      this.wires.push(w2);
      this.wires.push(w3);

      const timer = this.scene.time.addEvent({
        delay: 500,
        loop: true,
        callback: () => {
          this.wires.forEach(wire => wire.setRandomColor());
        },
      })
    }

    if (this.level === 10) {
      const xBase = 200;
      const w1 = new Wire(this.scene, xBase, this.bombBoxSprite.y, WIRE_COLORS.GRAY);
      const w2 = new Wire(this.scene, xBase + 100, this.bombBoxSprite.y, WIRE_COLORS.GRAY);
      const w3 = new Wire(this.scene, xBase + 200, this.bombBoxSprite.y, WIRE_COLORS.GRAY);

      w1.onClick = () => { this.onExplode(); };
      w2.onClick = () => { this.onExplode(); };
      w3.onClick = () => { this.onExplode(); };

      const x = this.levelTitle.x - 53;
      const y = 50;
      const levelText = `t`;
      const redWire = this.scene.add.text(x, y, levelText, { color: "#ff0000" }).setOrigin(0.5);
      redWire.setInteractive({ cursor: "pointer" });
      redWire.on("pointerdown", () => this.onDefuse());
      this.stuff.add(redWire);
      // IDEA: le podriamos poner un "are you sure??"

      this.wires.push(w1);
      this.wires.push(w2);
      this.wires.push(w3);
    }

    if (this.level === 11) {
      const xBase = 200;
      const w1 = new Wire(this.scene, xBase, this.bombBoxSprite.y, WIRE_COLORS.RED);
      const w2 = new Wire(this.scene, xBase + 100, this.bombBoxSprite.y, WIRE_COLORS.BLUE);
      const w3 = new Wire(this.scene, xBase + 200, this.bombBoxSprite.y, WIRE_COLORS.GREEN);

      w1.onClick = () => { this.onDefuse(); };
      w2.onClick = () => { this.onExplode(); };
      w3.onClick = () => { this.onExplode(); };

      this.levelTitle.setText("Cut the BLUE wire");

      this.wires.push(w1);
      this.wires.push(w2);
      this.wires.push(w3);
    }

    if (this.level === 12) {
      const xBase = 200;
      const w1 = new Wire(this.scene, xBase, this.bombBoxSprite.y, WIRE_COLORS.GRAY);
      const w2 = new Wire(this.scene, xBase + 100, this.bombBoxSprite.y, WIRE_COLORS.GRAY);
      const w3 = new Wire(this.scene, xBase + 200, this.bombBoxSprite.y, WIRE_COLORS.GRAY);

      w1.onClick = () => { this.onExplode(); };
      w2.onClick = () => { this.onExplode(); };
      w3.onClick = () => { this.onDefuse(); };
      w3.onHover = () => {
        this.scene.sound.play("red_audio");
      };
      // IDEA: le podriamos poner un "are you sure??"

      this.wires.push(w1);
      this.wires.push(w2);
      this.wires.push(w3);
    }

    if (this.level === 13) {
      const xBase = 200;
      const w1 = new Wire(this.scene, xBase, this.bombBoxSprite.y, WIRE_COLORS.GRAY);
      const w2 = new Wire(this.scene, xBase + 100, this.bombBoxSprite.y, WIRE_COLORS.GRAY);
      const w3 = new Wire(this.scene, xBase + 200, this.bombBoxSprite.y, WIRE_COLORS.GRAY);

      w1.onClick = () => { this.onExplode(); };
      // w2.onClick = () => { this.onExplode(); };
      // w3.onClick = () => { this.onExplode(); };

      this.scene.input.setDraggable(w1);
      this.scene.input.setDraggable(w2);
      this.scene.input.setDraggable(w3);

      this.scene.input.on('drag', (pointer, gameObject, dragX, dragY) => {
        gameObject.x = dragX;
        gameObject.y = dragY;
      });

      // IDEA: le podriamos poner un "are you sure??"

      this.wires.push(w1);
      this.wires.push(w2);
      this.wires.push(w3);
    }
  }
}