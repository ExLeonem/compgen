// Packages
const prompts = require('prompts');

// Code depency
import { SourceTypes } from '../parser/parser';

/**
 * Initialization of project configuration.
 * 
 * @author Maksim Sandybekov
 * @version 1.0.0
 */
class Config {

    init() {

    }


    configTemplate(): object {
        return {
            componentParser: "react",
            styleParser: "css", 
            packages: {
                jest: true,
                docz: false,

            }
        };
    }

    getTypeList() {

    }
}

export default Config;