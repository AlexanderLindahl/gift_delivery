import * as fs from "fs";

export class Elf {
  filePath: string;
  constructor() {
    this.filePath = __dirname + "/";
  }
  readDirections(fileName: string) {
    return fs.readFileSync(this.filePath + fileName, "utf8").split("");
  }
}
