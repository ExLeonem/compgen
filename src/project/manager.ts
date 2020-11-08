const fs = require('fs');


/**
 * Manages access to projects
 */
class ProjectManager {


    /**
     * Initializes a new project under given
     * 
     * @param name The name of the new project
     * @param path The path where to create the new project
     * @param key The authorization key
     * @param template The temlate to use for initialization
     */
    init(name: string, path: string, key: string, template: object) {

    }


    /**
     * Sync the current project with figma styles.
     */
    sync() {

    }
}


export default ProjectManager;