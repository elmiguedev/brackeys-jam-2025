import { Game } from "phaser";
import BootloaderScene from "./scenes/BootloaderScene";
import StartScene from "./scenes/StartScene";

export default new Game({
  type: Phaser.AUTO,
  width: 600,
  height: 600,
  backgroundColor: "",
  scene: [
    BootloaderScene,
    StartScene
  ]
})