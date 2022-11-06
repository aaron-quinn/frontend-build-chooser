
# Frontend Build System

The frontend build system is a way to easily bundle JS and SCSS/CSS files into a single file package.

For the CSS files, in addition to compiling SASS to CSS the scripts also use autoprefixer and postCSS to ensure good cross-browser support.

## How To Install

1. Download this repo to your computer. Feel free to rename the folder to whatever you would like.
2. In your terminal, enter the folder created.
3. Enter ```npm install ```

Note: If you run into issues, make sure your version of Node is updated to 14.8.0 or above.

## How To Use

The first step is always to make sure you're in the folder where you saved this repo on your computer. 

There are three different ways you can use this system.

1. If you're not sure which project name you want to use, just run ```npm run build``` and follow the prompts.
2. If you know the project name, you can run this ```npm run build [project name]```. Using the "sample" project example, you would run: ```npm run build sample```. This option will build and watch both CSS and JS files.
3. If you know you only want to work on JS or CSS specifically, you can run a command like this: ```npm run build [project name] [file type]```. For example, if you want to work on only the JS files in the "sample" project, then you could run: ```npm run build sample js```.

## How To Add A New Project
It was a priority to make this very easy to do.

In the repo, you'll see a file called ```options.js```. Just add a key to the object in that file that follows the example format below.

```js
  'your-project': {
    js: {
      input: "/your-project/js/index.js",
      output: "/assets/js/your-project.min.js",
    },
    css: {
      input: "/your-project/sass/index.scss",
      output: "/assets/css/your-project.min.css",
    },
  },
```

A few things to keep in mind:

* The input file is the starting point for the compiler and the output file is the minified end result.
* The input paths are relative to the default input folder which is ```/projects/```. 
* The output paths are relative to the default output folder which is ```/assets/```. 
* Both the input and output paths can be changed in the ```options.js``` file.


### Javascript Feature Support

This is set via the "target" key in the esbuild options. It's currently set to:

```js
["es6"]
```

### CSS Feature Support

This is set in package.json via the "browserslist" key.

```js
[
    ">0.25%", // Supports browsers with a market share of greater than 0.25%
    "not op_mini all" // Excludes Opera Mini
]
```
