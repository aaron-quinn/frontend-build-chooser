import runBuildJS from "./build-js.js";
import runBuildCSS from "./build-css.js";

export default async function runBuildAll(name, bs) {
  await Promise.all([runBuildJS(name, bs), runBuildCSS(name, bs)]);
}
