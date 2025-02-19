export interface BombStrategy {
  createWires: () => void;
  createContext: () => void;
}