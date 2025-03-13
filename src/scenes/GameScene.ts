import { Bomb } from "../entities/Bomb";
import { Timer } from "../entities/Timer";
import { INITIAL_LEVEL } from "../utils/Constants";

export default class GameScene extends Phaser.Scene {
  private bomb: Bomb;
  private timer: Timer;
  private level: number = 0;

  constructor() {
    super({ key: "GameScene" });
  }

  public create() {
    this.level = INITIAL_LEVEL - 1;
    this.createCamera();
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
      this.scene.start("StartScene");
    }


  }

  private getCenter() {
    return {
      x: this.cameras.main.width / 2,
      y: this.cameras.main.height / 2
    }
  }

}