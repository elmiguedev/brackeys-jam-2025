export default class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: "StartScene" });
  }

  public create() {
    this.createCamera();
  }

  private createCamera() {
    this.cameras.main.setBackgroundColor(0xffffff);
  }

}
