import { Bomb } from "../entities/Bomb";
import { Timer } from "../entities/Timer";

export default class GameScene extends Phaser.Scene {
  private bomb: Bomb;
  private timer: Timer;
  private level: number = 0;

  constructor() {
    super({ key: "GameScene" });
  }

  public create() {
    this.level = 0;
    this.createCamera();
    // this.createBomb();
    // this.createTimer();
    // this.startTimer();

    this.nextLevel();
  }

  private createCamera() {
    this.cameras.main.setBackgroundColor(0xffffff);
  }

  private nextLevel() {
    this.level += 1;

    if (this.bomb) {
      this.bomb.destroy();
    }

    this.bomb = new Bomb(this, this.level);
    this.bomb.onDefuse = () => {
      // alert("ganaste");
      this.nextLevel();
    }
    this.bomb.onExplode = () => {
      // alert("perdiste");
      this.scene.start("StartScene");
    }
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