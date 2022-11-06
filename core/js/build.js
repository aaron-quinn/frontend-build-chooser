import path from "path";
import esbuild from "esbuild";
import getBaseDirectory from "../helpers/get-base-directory.js";
import setOptions from "./set-options.js";

export default async function buildJS(projectSettings, bs) {
  const input = projectSettings?.input;
  const output = projectSettings?.output;
  if (!input || !output) {
    return;
  }

  const inputBase = getBaseDirectory("input");
  const outputBase = getBaseDirectory("output");
  const inputPath = path.join(inputBase, ...input.split("/").filter(Boolean));
  const outputPath = path.join(outputBase, ...output.split("/").filter(Boolean));
  await esbuild.build(setOptions(inputPath, outputPath, bs)).catch(() => process.exit(1));
}
