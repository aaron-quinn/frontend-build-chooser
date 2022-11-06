import runSelectedProjectTask from "./core/run-selected-task.js";
import runConsoleChooser from "./core/helpers/console-chooser.js";

// Get any arguments passed from the console
const [project = "none", task = "all"] = process.argv.slice(2);

if (project === "none") {
  await runConsoleChooser();
} else {
  runSelectedProjectTask(project, task);
}
