import chalk from "chalk";

let startTime;
let endTime;

const log = console.log;

export default {
  name: "timer",
  setup(build) {
    const { outfile } = build.initialOptions;
    const fileType = outfile.includes(".js") ? "JS" : "CSS";
    const jsIndicator = chalk.yellow.bold(fileType);
    const cssIndicator = chalk.magenta.bold(fileType);
    const fileTypeIndicator = fileType === "JS" ? jsIndicator : cssIndicator;
    build.onStart(() => {
      startTime = Date.now();
    });
    build.onEnd(() => {
      endTime = Date.now();
      log(`${fileTypeIndicator} ${((endTime - startTime) / 1000).toFixed(2)} sec`);
    });
  },
};
