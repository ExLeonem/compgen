
const prompts = require('prompts');

import { SourceTypes, StyleTypes } from '../parser/parser';

class Config {

    packages: string[];

    constructor(packages: string[]) {
        this.packages = packages;
    }


    init() {
        
    }

    getBaseTemplate() {


        

        return {
            componentParser: "react",
            styleParser: "css", 
            packages: {
                jest: true,
                docz: false,

            }
        }
    }


    selectComponentParser() {
        
    }
}


export default Config;