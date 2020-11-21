
interface FigmaTree {
    tree: object
}


interface IParser {
    type: SourceTypes | StyleTypes,
    parse(data: string): void;
}



/**
 * Different available parser types.
 * 
 * TODO: Implement other parsers after react parser is available.
 */
enum SourceTypes {
    React,
    // ReactNative,
    // Vue,
    // Angular,
    // Flutter,
}


/**
 * 
 */
enum StyleTypes {
    CSS,
    // SCSS,
    // SASS,
    // LESS,
    // STYLED_COMPONENTS
}


/**
 * Entry point for parsing of data.
 * Dispatches to specific parser types.
 * 
 * @class
 */
class GeneralParser {

    config: object;


    constructor(config: object) {
        this.config = config;
    }


    /**
     * Dispatch to explicit parser.
     * 
     * @param content The content to be parsed into components.
     * 
     */
    parse(data: string) {


    }
}


export default GeneralParser;
export {
    FigmaTree,
    IParser,
    SourceTypes,
    StyleTypes,
}