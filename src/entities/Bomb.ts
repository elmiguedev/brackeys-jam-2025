import { Scene } from "phaser";
import { BombStrategy } from "../core/bombStrategies/BombStrategy";
import { BombStrategyFactory } from "../core/bombStrategies/BombStategyFactory";
import { Screw } from "./Screw";
import { BOMB_TIMER, BOMB_Y_OFFSET, ENTITIES_DEPTH, SCALE_FACTOR } from "../utils/Constants";

export class Bomb {
  public onExplode: () => void;
  public onDefuse: () => void;
  public scene: Scene;
  public level: number = 0;
  public timer: Phaser.Time.TimerEvent;
  public currentTime: number = BOMB_TIMER;
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
  private timerText: Phaser.GameObjects.Text;

  constructor(scene: Phaser.Scene, level: number) {
    this.level = level;
    this.scene = scene;
    this.createBombBox();
    this.createLevelText();
    this.createLevelNumber();
    this.createScrews();
    this.createDisplay();
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
    this.timer.destroy();
    this.timerText.destroy(true);
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

    this.levelTitle = this.scene.add.text(
      x,
      y,
      levelText,
      {
        color: "#000000",
        fontFamily: "Tiny5",
        fontSize: "40px",
      }
    )
      .setOrigin(0.5)
      .setDepth(ENTITIES_DEPTH.BOMB_TITLE)
  }

  private createLevelNumber() {
    const x = this.scene.game.canvas.width / 2;
    const y = 10;
    const levelText = `(${this.level})`;

    this.levelNumber = this.scene.add.text(
      x,
      y,
      levelText,
      {
        color: "#000000",
        fontFamily: "Tiny5",
        fontSize: "40px",
      }
    )
      .setOrigin(0.5)
      .setDepth(ENTITIES_DEPTH.BOMB_TITLE)
  }

  private createBombBox() {
    const x = this.scene.game.canvas.width / 2;
    const y = (this.scene.game.canvas.height / 2) + BOMB_Y_OFFSET;

    this.bombBoxSprite = this.scene.add.image(
      x,
      y,
      "bomb_box"
    ).setScale(SCALE_FACTOR).setDepth(ENTITIES_DEPTH.BOMB_BOX);
    this.bombInnerBoxSprite = this.scene.add.image(
      x,
      y,
      "bomb_inner_box"
    ).setScale(SCALE_FACTOR).setDepth(ENTITIES_DEPTH.BOMB_INNER_BOX);
  }

  private createBombStrategy() {
    this.bombStrategy = BombStrategyFactory.create(this);
  }

  private createScrews() {
    const xCenter = this.scene.game.canvas.width / 2;
    const yCenter = (this.scene.game.canvas.height / 2) + BOMB_Y_OFFSET;
    const xOffset = 190;
    const yOffset = 190;

    this.screws = {
      topLeft: new Screw(this.scene, xCenter - xOffset, yCenter - yOffset),
      topRight: new Screw(this.scene, xCenter + xOffset, yCenter - yOffset),
      bottomLeft: new Screw(this.scene, xCenter - xOffset, yCenter + yOffset),
      bottomRight: new Screw(this.scene, xCenter + xOffset, yCenter + yOffset),
    }
  }

  private createDisplay() {
    this.timerText = this.scene.add.text(
      this.scene.game.canvas.width / 2,
      196,
      `00:${this.currentTime.toString().padStart(2, "0")}`,
      {
        color: "#fef3c0",
        fontFamily: "Tiny5",
        fontSize: "40px",
        letterSpacing: 8
      }
    ).setDepth(20).setOrigin(0.5);
    this.timer = this.scene.time.addEvent({
      loop: true,
      delay: 1000,
      callback: () => {
        this.currentTime--;
        if (this.currentTime === 0) {
          this.explode();
        }
        const currentTimeString = `00:${this.currentTime.toString().padStart(2, "0")}`;
        this.timerText.setText(currentTimeString);
      }
    });

  }



}