import taskTimer from "../helpers/task-timer.js";

export default function generateOptionsJS(inputs, output, bs) {
  const input = Array.isArray(inputs) ? inputs : [inputs];
  return {
    entryPoints: input,
    outfile: output,
    target: ["es6"],
    bundle: true,
    minify: true,
    sourcemap: true,
    watch: {
      onRebuild(error) {
        if (error) {
          console.error("JS Build Failed:", error);
        } else {
          bs.reload();
        }
      },
    },
    plugins: [taskTimer],
  };
}
