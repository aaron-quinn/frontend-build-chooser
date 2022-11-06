import inquirer from "inquirer";
import config from "../../options.js";
import runSelectedProjectTask from "../run-selected-task.js";

export default async function consoleChooser() {
  return (async () => {
    const projects = Object.keys(config.projects).sort();
    const project = await inquirer.prompt([
      {
        type: "list",
        name: "project",
        message: "Choose your project:",
        default: "core",
        choices: projects,
      },
    ]);
    const task = await inquirer.prompt([
      {
        type: "list",
        name: "task",
        message: "Which part are you working on?",
        choices: [...Object.keys(config.projects[project.project]), "all"],
      },
    ]);
    return { ...project, ...task };
  })()
    .then(({ project, task }) => {
      runSelectedProjectTask(project, task);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}
