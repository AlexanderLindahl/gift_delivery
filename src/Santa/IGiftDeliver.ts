import { House } from "House/House";

export interface IGiftDeliver {
  x: number;
  y: number;
  visitedHouses: Array<House>;
  deliverGifts: (directions: Array<String>) => void;
}
