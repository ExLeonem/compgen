const fs = require('fs');


/**
 * Create the frame for the project. 
 */
class Project {

    name: string;
    path: string;
    config: object;

    constructor(name: string, config: object) {
        this.name = name;
        this.path = process.cwd();
        this.config = config;
    }


    /**
     * Creates a new project.
     */
    create() {
        
    }


    /**
     * Synchronize the currently loaded project.
     */
    sync() {

    }

    // ---------------
    // Utilities
    // --------------------


    /**
     * Create default configuration for a project
     */
    private createDefaultConfig() {
        
    }
}


export default Creator;