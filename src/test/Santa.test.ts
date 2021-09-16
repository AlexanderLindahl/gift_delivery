import { Elf } from "../Elf/Elf";
import { Santa } from "../Santa/Santa";

describe("Santa should deliver presents to houses according to directions", () => {
  const deliveryScenarios = [
    { directions: ">", numberOfHouses: 2 },
    { directions: "^>v<", numberOfHouses: 4 },
    { directions: "^v ^v ^v ^v ^v", numberOfHouses: 2 },
  ];

  deliveryScenarios.forEach((scenario) => {
    it(`should deliver presents to ${scenario.numberOfHouses} for the directions ${scenario.directions}`, () => {
      let santa = new Santa();
      santa.deliverGifts(scenario.directions.split(""));
      expect(santa.visitedHouses.length).toBe(scenario.numberOfHouses);
    });
  });

  it("should deliver presents to all houses in directions", () => {
    let santa = new Santa();
    let elf = new Elf();
    const directions = elf.readDirections("directions.txt");
    santa.deliverGifts(directions);
    expect(santa.visitedHouses.length).toBe(2592);
  });

  it("should work together with robo Santa", () => {
    let santa = new Santa();
    let elf = new Elf();
    const directions = elf.readDirections("directions.txt");
    const isEven = (d, i) => i % 2 === 0;
    const isOdd = (d, i) => i % 2 !== 0;
    const santasDirections = directions.filter(isEven);
    const roboSantasDirections = directions.filter(isOdd);
    const roboSanta = new Santa();

    santa.deliverGifts(santasDirections);
    roboSanta.deliverGifts(roboSantasDirections);

    const unionOfVisitedHouses = santa.visitedHouses
      .concat(roboSanta.visitedHouses)
      .filter(
        (house, index, self) =>
          self.findIndex((other) => {
            return other.x === house.x && other.y === house.y;
          }) === index
      );

    expect(unionOfVisitedHouses.length).toBe(2360);
  });
});
