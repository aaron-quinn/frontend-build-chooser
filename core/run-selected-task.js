import browserSync from "browser-sync";
import chalk from "chalk";
import config from "../options.js";
import runBuildAll from "./builders/build-all.js";
import runBuildJS from "./builders/build-js.js";
import runBuildCSS from "./builders/build-css.js";

export default function runSelectedProjectTask(project, task) {
  const projects = Object.keys(config.projects);
  if (!projects.includes(project)) {
    console.log(`A project with the name "${project}" does not exist.`);
    process.exit(0);
  }

  const bs = browserSync.create();

  console.log(chalk.bold(`${project}`));
  console.log(`Running ${task.toUpperCase()}`);

  bs.init({
    port: 4500,
    ghostMode: false,
    logLevel: "silent",
    notify: true,
    injectNotification: "overlay",
  });

  if (task === "all") {
    runBuildAll(project, bs);
  }

  if (task === "js") {
    runBuildJS(project, bs);
  }

  if (task === "css") {
    runBuildCSS(project, bs);
  }
}
