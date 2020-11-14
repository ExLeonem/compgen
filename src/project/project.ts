const signale = require('signale');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
import chalk = require('chalk');
const crypto = require('crypto');


/**
 * @interface
 * 
 * Options that can be passed 
 */
interface IOptions {
    template?: string,
    parser?: string,
    url?: string,
    // style?: string,
    // file?: string,
}


/**
 * Create and manage projects.
 * 
 * @class
 */
class Project {

    name: string;
    path: string;
    options?: IOptions;
    config?: object; 

    // Is current path a project?
    isProject?: boolean;


    /**
     * Load a project from the current position
     * 
     * @constructs
     * @param name The name of the project
     * @param options Options useable 
     */
    constructor(name: string, options?: IOptions) {


        this.path = path.join(process.cwd(), name);
        this.name = name;

        this.options = options;
        this.config = {};

        this.isProject = this.dirIsProject(this.path);
    }


    /**
     * Create a new figma style project.
     * 
     * @todo Explicitly define naming convention. Lookup naming convention of already existing files
     * 
     * @param name The name of the project to create.
     * @param options Options to be used for the creation process.
     */
    create(): void {
      
        let dirContent = fs.readdirSync(process.cwd());

        let directoryExists = dirContent.includes(this.name);
        if (directoryExists) {
            let isDir = fs.statSync(this.path).isDirectory();
            signale.error(`Can't create a project called ${this.name}. There is already a ${isDir? "directory" : "file"} with the same name at the current location.`);
            return;
        }

        let isComplientName = Project.checkNameConvention(this.name);
        if (!isComplientName) {
            signale.error(`The project name ${this.name} doesn't conform with the naming convention.`);
            return;
        }

        // Create Project directory
        fs.mkdir(this.path, {}, (err: Error) => {
            if (err) {
                signale.error(err);
                process.exit();
            }
        });


        // Load template into directory
        let templateBaseUrl = "https://github.com/ExLeonem/fsp-template";
        if (this.options?.template) {
            
        } else {
            
        }
    }


    /**
     * Synchronize the currently loaded project with figma files.
     */
    sync(): void {

        // Not a figma-style-parser project
        if (!this.isProject) {
            signale.error(`Cannot sync. "${this.path}" is not a figma-style-parser project.`)
            return;
        }

        // Is figma-style-parser-project
        let template = this.options ? this.options.template : null;

        // TODO: Check if token exists, else prompot option to set
    }



    // ---------------
    // Utilities
    // --------------------

    /**
     * Create default configuration for a project
     */
    private createDefaultConfig() {

        return {
            
        }
    }


    /**
     * Check if the current directory is a fsp project.
     * The directory is a project if a fsp config file exists. (".fsp.config.json")
     * 
     * @param {string} path The path to check. (optional) 
     * @return {boolean} Wether or not directory at path is a fsp project.
     */
    private dirIsProject(path?: string): boolean {

        let currentDir = path !== null ? path : process.cwd();
        let configFileName = ".fsp.config.json";

        try {
            let filesInDir = fs.readdirSync(currentDir);
            return filesInDir.includes(configFileName);
        } catch(e){
            return false;
        };
    }


    

    /**
     * Check wether the potential project name complies with naming rules of projects.
     * 
     * @param {string} name The name of the project
     * @return {boolean} Wether or not name complies with naming rules
     */
    private static checkNameConvention(name: string): boolean{

        let isValidName = true;
        // TODO: check if name is valid

        return isValidName;
    }
}


export default Project;
export {
    IOptions
}