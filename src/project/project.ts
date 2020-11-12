const signale = require('signale');
const fs = require('fs');
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
 * Manage Projects.
 * 
 * @class
 */
class Project {

    name?: string;
    path: string;
    options?: IOptions;

    // Is current path a project?
    isProject?: boolean;


    /**
     * Load a project from the current position
     * 
     * @constructs
     * @param name The name of the project
     * @param options Options useable 
     */
    constructor(name?: string) {

        this.path = process.cwd();
        
        this.name = name;
        this.options = {};
        this.isProject = this.dirIsProject(this.path,);
    }


    /**
     * Create a new figma style project.
     * 
     * @param name The name of the project to create.
     * @param options Options to be used for the creation process.
     */
    static create(name: string, options: IOptions) {
        


    }


    /**
     * Synchronize the currently loaded project.
     */
    sync() {

        // Not a figma-style-parser project
        if (!this.isProject) {
            signale.error(`"${this.path}" is not a figma-style-parser project.`)
            return;
        }

        // Is figma-style-parser-project
        let template = this.options ? this.options.template : null;
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
     * @param path The path to check. (optional) 
     * @return {boolean} Wether or not directory at path is a fsp project.
     */
    private dirIsProject(path?: string) {

        let currentDir = path !== null ? path : process.cwd();
        let configFileName = ".fsp.config.json";

        let filesInDir = fs.readdir(currentDir);
        return configFileName in filesInDir;
    }
}


export default Project;
export {
    IOptions
}