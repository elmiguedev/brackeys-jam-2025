import { Bomb } from "../entities/Bomb";
import { Timer } from "../entities/Timer";

export default class GameScene extends Phaser.Scene {
  private bomb: Bomb;
  private timer: Timer;

  constructor() {
    super({ key: "GameScene" });
  }

  public create() {
    this.createCamera();
    this.createBomb();
    this.createTimer();
    this.startTimer();
  }

  private createCamera() {
    this.cameras.main.setBackgroundColor(0xffffff);
  }

  private createBomb() {
    const { x, y } = this.getCenter();
    this.bomb = new Bomb(this, x, y);
  }

  private createTimer() {
    this.timer = new Timer(
      this,
      this.getCenter().x,
      20
    )
  }

  private startTimer() {
    this.timer.startTimer(10);
  }

  private getCenter() {
    return {
      x: this.cameras.main.width / 2,
      y: this.cameras.main.height / 2
    }
  }

}