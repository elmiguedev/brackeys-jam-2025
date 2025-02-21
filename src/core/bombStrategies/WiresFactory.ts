import { Scene } from "phaser";
import { Wire } from "../../entities/Wire";
import { Bomb } from "../../entities/Bomb";

interface WireDefinition {
  color: number;
  correct: boolean;
  label?: string;
  labelColor?: string;
}

export class WiresFactory {
  public static createThreeWires(bomb: Bomb, definitions: WireDefinition[]) {
    const xBase = 200;
    const y = bomb.scene.game.canvas.height / 2;
    const wires = [];

    definitions.forEach((def, i) => {
      const wire = new Wire(bomb.scene, xBase + (i * 100), y, def.color);
      if (def.label) {
        wire.setText(def.label, def.labelColor);
      }
      if (def.correct) {
        wire.onClick = () => bomb.defuse();
      } else {
        wire.onClick = () => bomb.explode();
      }
      wires.push(wire);
    })

    return wires;
  }

  public static createSingleWire(bomb: Bomb, definition: WireDefinition) {
    const x = bomb.scene.game.canvas.width / 2;
    const y = bomb.scene.game.canvas.height / 2;

    const wire = new Wire(bomb.scene, x, y, definition.color);
    if (definition.label) {
      wire.setText(definition.label, definition.labelColor);
    }
    if (definition.correct) {
      wire.onClick = () => bomb.defuse();
    } else {
      wire.onClick = () => bomb.explode();
    }

    return [wire];
  }
}