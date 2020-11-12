#!/usr/bin/env node


const { Command } = require('commander');
import Project, { IOptions as ProjectOptions} from './project/project';


const program = new Command();

program
    .description("A style parser. Pull you'r layouts from figma and parse into whatever you like.")
    .option("init", "Initialize a new project")
    .option("sync", "Synchronize changes with current styles in figma.")
    .version("1.0.0");

program
    .command("init <name>")
    .description("Initialize the current directory, generates default configuration file.")
    .option("-t, --template <templateUrl>", "Use a template to initialize the project.")
    .option("-p, --parser <parser>", "The parser to be used.")
    .option("-u, --url <url>", "URL to the project to be used.")
    .action((name: string, options: ProjectOptions) => {
        // Initialize current directory for use with morphology, create .morph.config.json
        Project.create(name, options);
    });


program
    .command("add")
    .description("Adding files to be parsed.")
    .option("-s, --style", "Consists only the file of just style assets?")
    .option("-f, --file <fileUrl>", "Add a new file to the configuration")
    .action((options: object) => {
        
    });



program
    .command("link")
    .description("Link the current ")
    .action(() => {

    });


program
    .command("config")
    .description("Set global configurations to use.")
    .option("-p, --parser <parser>", "The parser to be used.")
    .option("-t, --token <token>", "Set a global to token to request the file contents.")
    .action((options: object) => {
        
    });


program
    .command("sync")
    .description("Synchronize the current project with your figma stylesheets.")
    .option("-v, --verbose", "Show parse output.")
    .option("-p, --parser", "The parser to use [default: react | react-native]")
    .action((cmdObj: object) => {
        console.log("parse a file.")
    });




// Output help if no mandatory parameters were passed
program.exitOverride((err: any) => {

    if (err.code == 'commander.missingArgument') {
        program.outputHelp();
    }
    process.exit(err.exitCode);
});

program.parse(process.argv);


// No command was passed, output help
if (!process.argv.length) {
    program.outputHelpInformation();
}

if ( program.args.length == 0) {
    console.log("Would you show help?");
}