import buildJS from "../js/build.js";
import config from "../../options.js";

export default async function runBuildJS(name, bs) {
  buildJS(config.projects[name]?.js, bs);
}
