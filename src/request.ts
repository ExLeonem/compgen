const signale = require('signale');
const axios = require('axios');


class StyleSheetRequest {

    baseUrl: string;
    apiKey: string;

    constructor(apiKey: string) {
        this.baseUrl = "https://api.figma.com";
        this.apiKey = apiKey;
    }




    request(key: string) {

    }

}

export default ComponentRequest;