import { Game } from "phaser";
import BootloaderScene from "./scenes/BootloaderScene";
import StartScene from "./scenes/StartScene";
import GameScene from "./scenes/GameScene";

export default new Game({
  type: Phaser.AUTO,
  parent: "#canvas",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  backgroundColor: "#ffffff",
  render: {
    pixelArt: true
  },
  scene: [
    BootloaderScene,
    StartScene,
    GameScene
  ]
})