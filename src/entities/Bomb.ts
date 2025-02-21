import { Scene } from "phaser";
import { WIRE_COLORS } from "../utils/Constants";
import { Wire } from "./Wire";
import { BombStrategy } from "../core/bombStrategies/BombStrategy";
import { BombStrategyFactory } from "../core/bombStrategies/BombStategyFactory";

export class Bomb {
  public onExplode: () => void;
  public onDefuse: () => void;
  public scene: Scene;
  public level: number = 0;

  private bombStrategy: BombStrategy;
  private levelTitle: Phaser.GameObjects.Text;
  private bombBoxSprite: Phaser.GameObjects.Image;

  constructor(scene: Phaser.Scene, level: number) {
    this.level = level;
    this.scene = scene;
    this.createBombBox();
    this.createLevelText();
    this.createBombStrategy();
  }

  public destroy() {
    this.bombBoxSprite.destroy(true)
    this.bombStrategy.destroy();
    this.levelTitle.destroy(true);
  }

  public setTitle(title: string) {
    this.levelTitle.setText(title);
  }

  public defuse() {
    this.onDefuse();
  }

  public explode() {
    this.onExplode();
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

  private createBombStrategy() {
    this.bombStrategy = BombStrategyFactory.create(this);
  }

}