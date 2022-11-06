import buildCSS from "../css/build.js";
import config from "../../options.js";

export default async function runBuildCSS(name, bs) {
  buildCSS(config.projects[name]?.css, bs);
}
