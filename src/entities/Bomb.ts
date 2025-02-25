import { Scene } from "phaser";
import { BombStrategy } from "../core/bombStrategies/BombStrategy";
import { BombStrategyFactory } from "../core/bombStrategies/BombStategyFactory";
import { Screw } from "./Screw";
import { ENTITIES_DEPTH } from "../utils/Constants";

export class Bomb {
  public onExplode: () => void;
  public onDefuse: () => void;
  public scene: Scene;
  public level: number = 0;
  public screws: {
    topLeft: Screw;
    topRight: Screw;
    bottomLeft: Screw;
    bottomRight: Screw;
  };

  private bombStrategy: BombStrategy;
  private levelNumber: Phaser.GameObjects.Text;
  private levelTitle: Phaser.GameObjects.Text;
  private bombBoxSprite: Phaser.GameObjects.Image;
  private bombInnerBoxSprite: Phaser.GameObjects.Image;


  constructor(scene: Phaser.Scene, level: number) {
    this.level = level;
    this.scene = scene;
    this.createBombBox();
    this.createLevelText();
    this.createLevelNumber();
    this.createScrews();

    this.createBombStrategy(); // SIEMPRE AL ULTIMO
  }

  public destroy() {
    this.bombBoxSprite.destroy(true)
    this.bombStrategy.destroy();
    this.levelTitle.destroy(true);
    this.levelNumber.destroy(true);
    this.screws.topLeft.destroy(true);
    this.screws.topRight.destroy(true);
    this.screws.bottomLeft.destroy(true);
    this.screws.bottomRight.destroy(true);
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

  public openBox() {
    this.bombInnerBoxSprite.setVisible(true);
    this.bombBoxSprite.setVisible(false);
  }

  public closeBox() {
    this.bombInnerBoxSprite.setVisible(false);
    this.bombBoxSprite.setVisible(true);
  }

  private createLevelText() {
    const x = this.scene.game.canvas.width / 2;
    const y = 50;
    const levelText = `Cut the RED wire`;

    this.levelTitle = this.scene.add.text(x, y, levelText, { color: "#000000" })
      .setOrigin(0.5)
      .setDepth(ENTITIES_DEPTH.BOMB_TITLE)
  }

  private createLevelNumber() {
    const x = this.scene.game.canvas.width / 2;
    const y = 20;
    const levelText = `(${this.level})`;

    this.levelNumber = this.scene.add.text(x, y, levelText, { color: "#000000" })
      .setOrigin(0.5)
      .setDepth(ENTITIES_DEPTH.BOMB_TITLE)
  }

  private createBombBox() {
    const x = this.scene.game.canvas.width / 2;
    const y = this.scene.game.canvas.height / 2;

    this.bombBoxSprite = this.scene.add.image(
      x,
      y,
      "bomb_box"
    ).setDepth(ENTITIES_DEPTH.BOMB_BOX);
    this.bombInnerBoxSprite = this.scene.add.image(
      x,
      y,
      "bomb_inner_box"
    ).setDepth(ENTITIES_DEPTH.BOMB_INNER_BOX);
  }

  private createBombStrategy() {
    this.bombStrategy = BombStrategyFactory.create(this);
  }

  private createScrews() {
    this.screws = {
      topLeft: new Screw(this.scene, 125, 125),
      topRight: new Screw(this.scene, 470, 125),
      bottomLeft: new Screw(this.scene, 125, 470),
      bottomRight: new Screw(this.scene, 470, 470),
    }
  }



}