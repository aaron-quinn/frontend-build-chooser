import path from "path";
import options from "../../options.js";

// Set the base directory for the front-end files
export default function getBaseDirectory(type) {
  const { directories } = options;
  if (type === "input") {
    return path.resolve(directories.input);
  }
  return path.resolve(directories.output);
}
