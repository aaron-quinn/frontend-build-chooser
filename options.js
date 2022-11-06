export default {
  directories: {
    input: "projects",
    output: "assets",
  },
  projects: {
    sample: {
      js: {
        input: "/sample/sample.js",
        output: "/sample/sample.min.js",
      },
      css: {
        input: "/sample/sample.scss",
        output: "/sample/sample.min.css",
      },
    },
    sample2: {
      js: {
        input: "/sample2/sample2.js",
        output: "/sample2/sample2.min.js",
      },
      css: {
        input: "/sample2/sample2.scss",
        output: "/sample2/sample2.min.css",
      },
    },
  },
};
