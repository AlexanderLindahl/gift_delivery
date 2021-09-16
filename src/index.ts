import { Santa } from "./Santa/Santa";
import { Elf } from "./Elf/Elf";
const partOne = () => {
  let santa = new Santa();
  let elf = new Elf();
  const directions = elf.readDirections("directions.txt");
  santa.deliverGifts(directions);
  return santa.visitedHouses.length;
};

const partTwo = () => {
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

  return unionOfVisitedHouses.length;
};

console.log(`Part one: ${partOne()} houses got gifts`);
console.log(`Part two: ${partTwo()} houses got gifts`);
