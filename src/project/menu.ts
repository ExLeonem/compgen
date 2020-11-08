const signale = require('signale');
const prompts = require('prompts');

import Creator from './project';

/**
 * Handles menu for creating/managing of projects
 */
class ProjectMenu {


    /**
     * Project initialization menu
     * 
     * Options:
     *  template (object) The template to use
     * 
     */
    static init(name: string, options: object) {

        signale.debug("Initialize Project");

        let question: object = [
            {
                type: "text",
                name: "fileId",
                message: "What is the ID of the file?"
            },
            {
                type: "text",
                name: "version",
                message: ""
            }
        ];


        (async () => {
            const response = await prompts(question);



            console.log(response.project);
        })();
    }
}

export default ProjectMenu;