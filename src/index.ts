import { Game } from "phaser";
import BootloaderScene from "./scenes/BootloaderScene";
import StartScene from "./scenes/StartScene";
import GameScene from "./scenes/GameScene";

export default new Game({
  type: Phaser.AUTO,
  width: 600,
  height: 600,
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