const { Command } = require('commander');
const signale = require('signale');

const program = new Command();
program.version("1.0.0");
program.parse(process.argv);


program
    .command("init <name>")
    .description("Initialize the current directory, generates default configuration file.")
    .option("-t, --template", "Use a template to initialize the project")
    .option("", "")
    .action((name:string, cmdObj:object) => {
        // Initialize current directory for use with morphology, create .morph.config.json
        signale.debug("Create a new ");

    });


// program
//     .command("watch")
//     .description("Watch a figma file for changes.")
//     .action(() => {
//         console.log("watch")
//     });


program
    .command("sync")
    .description("Pull styles from a figma file.")
    .option("-v, --verbose", "Show parse output.")
    .option("-p, --parser", "The parser to use [default: react | react-native]")
    .action((cmdObj: object) => {
        console.log("parse a file.")
    });


// program
//     .command("")
//     .description("")
//     .action((options) => {

//     });


program.parse(process.argv);