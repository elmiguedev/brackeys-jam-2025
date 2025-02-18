export default class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: "StartScene" });
  }

  public create() {
    this.createCamera();
    this.createTitle();
    this.createStartButton();
  }

  private getCenter() {
    return {
      x: this.cameras.main.width / 2,
      y: this.cameras.main.height / 2
    }
  }

  private createCamera() {
    this.cameras.main.setBackgroundColor(0xffffff);
  }

  private createTitle() {
    this.add.image(
      this.getCenter().x,
      100,
      "title"
    );
  }

  private createStartButton() {
    const startButton = this.add.image(
      this.getCenter().x,
      300,
      "start_button"
    );

    startButton.setInteractive({ cursor: "pointer" });
    startButton.on("pointerdown", () => this.scene.start("GameScene"));
  }

}
