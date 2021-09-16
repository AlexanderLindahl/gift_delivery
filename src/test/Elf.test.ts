import { Elf } from "../Directions/Elf";

describe("Tests that the Elf works", () => {
  it("Tests that the Elf could read directions", () => {
    const elf = new Elf();

    expect(elf.readDirections("directions.txt").length).toBe(8192);
  });
});
