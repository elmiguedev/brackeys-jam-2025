import { Scene, } from "phaser";

export class Timer extends Phaser.GameObjects.Container {

  private timerBar: Phaser.GameObjects.Rectangle;
  private timerTween: Phaser.Tweens.Tween;

  constructor(scene: Scene, x: number, y: number) {
    super(scene, x, y);
    this.scene.add.existing(this);
    this.createTimerBar();
  }

  public startTimer(seconds: number) {
    if (!this.timerTween) {
      this.timerTween = this.scene.tweens.add({
        targets: this.timerBar,
        width: 0,
        duration: seconds * 1000,
        onComplete: () => {
          this.timerBar.width = 0;
        }
      })
    }
  }

  private createTimerBar() {
    this.timerBar = this.scene.add.rectangle(
      this.x,
      this.y,
      this.scene.cameras.main.width,
      10,
      0x000000
    )
  }

}