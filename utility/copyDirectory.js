import * as path from "path";
import * as fs from "fs";
import * as fse from "fs-extra";

const srcDir = `dist`;
const destDir = `actions2`;

fse
  .copy(srcDir, destDir)
  .then(console.log("done"))
  .catch((error) => console.log(error));
