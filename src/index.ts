const { Command } = require('commander');
const readline = require('readline');

const program = new Command();
program.version("1.0.0");
program.parse(process.argv);



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


/**
 * ------------------------------------
 *  +++ CompoGen ++++++++++++++++++++++
 * 
 *  Design your application while 
 *  creating a component library. 
 * ------------------------------------
 */
program
    .command("init")
    .description("Initialize the current directory, generates default configuration file.")
    .option("-t, --template <url>", "Use a template in which to parse component stubs.")
    .option("-s, --style <type>", "What kind of styles to generate. [scss, less, ...]")
    .option("-p, --parser <type>", "The parser to use for this component library.(default: react) [react, ...]")
    .action(() => {
        // Initialize current directory for use with morphology, create .morph.config.json
        rl.question("Name: ", (answer: string) => {

            console.log(answer);
            rl.close();
        });
    });


program
    .command("parse")
    .description("Parse a file to components.")
    .option("-u, --url <url>", "The URL to access the components")
    .option("-k, --key <key>", "The API-Key to use")
    .action(() => {
        console.log("watch")
    });


program
    .command("sync")
    .description("Synchronize component library with current styles.")
    .option("-v, --verbose", "Show parsed output.")
    .option("-d, --dry", "Dry run. Don't make any changes, while showing things that would be changed.")
    .option("-m, --mode <mode>", "What to do with already existing components. []")
    .action((cmdObj : any) => {
        console.log("parse a file.")
    });


program
    .command("link")
    .description("Use component definitions in combination with wireframes to generate mockups.")
    .option("-p, --path","The path to the component library.")
    .action(() => {
        
    });

program.parse(process.argv);