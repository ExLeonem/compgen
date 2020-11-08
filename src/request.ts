const signale = require('signale');
const axios = require('axios');


/**
 * Requests style sheet content.
 */
class Request {

    baseUrl: string;
    apiToken: string;

    constructor(apiToken: string, fileKey: number) {
        // https://www.figma.com/file/:key/:title?node-id=:id.
        // https://www.figma.com/file/NwglkGOKUBBIACD8GgZUXbbe/conziv?node-id=1452%3A22291
        // this.baseUrl = "https://api.figma.com";
        this.baseUrl = `https://api.figma.com/files/${fileKey}/nodes`;
        this.apiToken = apiToken;
    }

    request(url: string) {
        
        axios.get(url, {
            headers: {
                "X-Figma-Token": this.apiToken
            }
        })
        .then((response: object) => {
            console.log(response);

        }).catch((err: object) => {
            signale.error("Request for style data failed. Check the configured url: " + url);
        });
    }
}

export default Request;