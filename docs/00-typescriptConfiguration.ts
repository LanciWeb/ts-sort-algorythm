//* Typescript Configuration
/**
 * when we create a TypeScript file, we can use the typescript compiler by running 'tsc fileName.ts'
 * The compiler is then compiling the file, and replacing it with a js file, basically 'fileName.js'
 */
tsc index.ts

//# Orginizing the project
/**
 * Obviously, we cannot put everything into the index.ts file and keep the project in a single root folder.
 * So let's set up the right configuration:
 * TODO 1 - Create a src folder and move erverything there
 * TODO 2 - Create a build folder OUTSIDE of src folder //? this is where we want the result of the compiler to appear
 * TODO 3 - Generate a tsconfig.json file (in the root folder) to provide configuration to the compiler by doing 'tsc --init'
 * TODO 4 - specify the rootDir inside tsconfig.json file (relative path to our source code)
 * TODO 5 - specify the outDir inside tsconfig.json file (relative path to our compiled code)
 * TODO 6 - exclude any folder we do not want to build
 * ! now we can just run 'tsc' to make the compiler run and follow the config instructions
 * ! also, 'tsc -w' is going to watch the code for us and recompile at any save
 * This is only going to compile stuff, but does not run the project
 */

 //# Compile and Run project configuration
 /**
  * If we want our project to be compiled and ran every time we save, we need to add a little bit of configuration;
  * TODO 1 - Create a package.json (npm init -y)
  * TODO 2 - Install Nodemon and Concurrently (npm i --save nodemon concurrently)
  * ? nodemon takes care of re-run Node
  * ? concurrently allows to concatenate more commands in one node script.
  * TODO 3 - setup package.json script (see below)
  */

  //# Setup package.json
  "scripts": {
    "start:build": "tsc -w", //? watches and compile
    "start:run": "nodemon build/index.js", //? runs the result of the compile
    "start": "concurrently npm:start:*" //? run both the commands in one line thanks to concurrently
  },

