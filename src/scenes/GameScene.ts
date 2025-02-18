export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
  }

  public create() {
    this.createCamera();
  }

  private createCamera() {
    this.cameras.main.setBackgroundColor(0xffffff);
  }

}