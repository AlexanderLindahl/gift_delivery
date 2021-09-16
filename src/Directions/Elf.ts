import * as fs from "fs";
import { IReadDirections } from "./IReadDirections";

export class Elf implements IReadDirections {
  filePath: string;
  constructor() {
    this.filePath = __dirname + "/";
  }
  readDirections(fileName: string): Array<string> {
    return fs.readFileSync(this.filePath + fileName, "utf8").split("");
  }
}
