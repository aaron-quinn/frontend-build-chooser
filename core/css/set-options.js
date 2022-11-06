import esbuildSassPlugin from "esbuild-sass-plugin";
import autoprefixer from "autoprefixer";
import postcss from "postcss";
import postcssPresetEnv from "postcss-preset-env";
import taskTimer from "../helpers/task-timer.js";

const { sassPlugin } = esbuildSassPlugin;

export default function generateOptionsCSS(inputs, output, bs) {
  const input = Array.isArray(inputs) ? inputs : [inputs];
  return {
    entryPoints: input,
    outfile: output,
    bundle: true,
    minify: true,
    watch: {
      onRebuild(error) {
        if (error) {
          console.error("CSS Build Failed:", error);
        } else {
          bs.reload("*.css");
        }
      },
    },
    plugins: [
      sassPlugin({
        async transform(source, resolveDir) {
          const { css } = await postcss([
            autoprefixer,
            postcssPresetEnv(),
          ]).process(source, {
            from: undefined,
          });
          return css;
        },
        cache: true,
        sourceMap: true,
        quietDeps: true,
      }),
      taskTimer,
    ],
  };
}
