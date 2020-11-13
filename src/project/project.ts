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
 * Create and manage projects.
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
     * @todo Explicitly define naming convention. Lookup naming convention of already existing files
     * 
     * @param name The name of the project to create.
     * @param options Options to be used for the creation process.
     */
    static create(name: string, options: IOptions): void {
        
        console.log(process.cwd());
        let dirContent = fs.readdirSync(process.cwd());

        let directoryExists = dirContent.includes(name);
        if (directoryExists) {
            let isDir = fs.fstatSync(name).isDirectory();
            signale.error(`Can't create a project called ${name}. There is already a ${isDir? "directory" : "file"} with the same name at the current location.`);
            return;
        }

        let isComplientName = Project.checkNameConvention(name);
        if (!isComplientName) {
            signale.error(`The project name ${name} doesn't conform with the naming convention.`);
            return;
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

        // 
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

        let filesInDir = fs.readdir(currentDir);
        return configFileName in filesInDir;
    }


    /**
     * Check wether the potential project name complies with naming rules of projects.
     * 
     * @param {string} name The name of the project
     * @return {boolean} Wether or not name complies with naming rules
     */
    private static checkNameConvention(name: string): boolean{

        let isValidName = true;
        return isValidName;
    }
}


export default Project;
export {
    IOptions
}