import { House } from "../House/House";
import { IGiftDeliver } from "./IGiftDeliver";

export class Santa implements IGiftDeliver {
  x: number;
  y: number;
  visitedHouses: Array<House>;

  constructor() {
    this.x = 0;
    this.y = 0;
    this.visitedHouses = [new House(this.x, this.y)];
  }

  deliverGifts(directions: Array<string>) {
    directions.forEach((direction) => {
      this.goToNextHouse(direction);
      const nextHouse = new House(this.x, this.y);

      if (
        !this.visitedHouses.find(
          (house) => house.x === nextHouse.x && house.y === nextHouse.y
        )
      ) {
        this.visitedHouses.push(nextHouse);
      }
    });
  }

  private goToNextHouse(direction: string) {
    switch (direction) {
      case ">":
        this.x++;
        break;
      case "<":
        this.x--;
        break;
      case "^":
        this.y++;
        break;
      case "v":
        this.y--;
        break;
    }
  }
}
