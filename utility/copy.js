import * as fs from "fs";
import { exec } from "child_process";
const fsAsync = fs.promises;
import * as fse from "fs-extra";

const srcDir = `dist`;
const destDir = `actions2`;

fse
  .copy(srcDir, destDir)
  .then(console.log("done"))
  .catch((error) => console.log(error));

// try {
//   await fsAsync.copyFile("./dist/index.js", "./actions2/index.js");
// } catch (error) {
//   console.log(error);
// }
