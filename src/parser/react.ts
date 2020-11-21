
import {IParser, SourceTypes } from './parser';


/**
 * React specific parser.
 */
class ReactParser implements IParser {

    type: SourceTypes;
    fileStructure: object;


    constructor() {
        this.fileStructure = {};
        this.type = SourceTypes.React;
    }


    /**
     * Parses the given data.
     * 
     * @param data 
     */
    parse(data: string) {

    }
}


export default ReactParser;