import * as fs from "fs";
import { exec } from "child_process";
const fsAsync = fs.promises;

try {
  await fsAsync.copyFile("./dist/index.js", "./actions2/index.js");
} catch (error) {
  console.log(error);
}
