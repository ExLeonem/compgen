#!/usr/bin/env node
const { Command } = require('commander');

const program = new Command();
program.version("1.0.0");
program.parse(process.argv);


program
    .command("init")
    .description("Initialize the current directory, generates default configuration file.")
    .action(() => {
        // Initialize current directory for use with morphology, create .morph.config.json
        
    });


// program
//     .command("watch")
//     .description("Watch a figma file for changes.")
//     .action(() => {
//         console.log("watch")
//     });


program
    .command("pull")
    .description("Pull styles from a figma file.")
    .option("-v, --verbose", "Show parse output.")
    .option("-p, --parser", "The parser to use [default: react | react-native]")
    .action((cmdObj) => {
        console.log("parse a file.")
    });


// program
//     .command("")
//     .description("")
//     .action((options) => {

//     });


program.parse(process.argv);