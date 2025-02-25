import { Bomb } from "../../entities/Bomb";
import { BombStrategy } from "./BombStrategy";
import { BombLevel1 } from "./levels/BombLevel1";
import { BombLevel10 } from "./levels/BombLevel10";
import { BombLevel11 } from "./levels/BombLevel11";
import { BombLevel12 } from "./levels/BombLevel12";
import { BombLevel13 } from "./levels/BombLevel13";
import { BombLevel2 } from "./levels/BombLevel2";
import { BombLevel3 } from "./levels/BombLevel3";
import { BombLevel4 } from "./levels/BombLevel4";
import { BombLevel5 } from "./levels/BombLevel5";
import { BombLevel6 } from "./levels/BombLevel6";
import { BombLevel7 } from "./levels/BombLevel7";
import { BombLevel8 } from "./levels/BombLevel8";
import { BombLevel9 } from "./levels/BombLevel9";

export class BombStrategyFactory {
  public static create(bomb: Bomb): BombStrategy {
    switch (bomb.level) {
      case 1: return new BombLevel1(bomb);
      case 2: return new BombLevel2(bomb);
      case 3: return new BombLevel3(bomb);
      case 4: return new BombLevel4(bomb);
      case 5: return new BombLevel5(bomb);
      case 6: return new BombLevel6(bomb);
      case 7: return new BombLevel7(bomb);
      case 8: return new BombLevel8(bomb);
      case 9: return new BombLevel9(bomb);
      case 10: return new BombLevel10(bomb);
      case 11: return new BombLevel11(bomb);
      case 12: return new BombLevel12(bomb);
      case 13: return new BombLevel13(bomb);
    }
  }
}