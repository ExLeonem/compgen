const url = require('url');
const signale = require('signale');
const axios = require('axios');


/**
 * Represents the remote figma project.
 */
class Remote {

    baseUrl: string;
    apiToken: string;
    content?: object;

    /**
     * Initialize a connection to the remote figma project.
     * 
     * @param apiToken The API-Token used to request figma api content.
     * @param projectKey The project key, where to look for files.
     */
    constructor(apiToken:string, fileKey: string) {
        // https://www.figma.com/file/:key/:title // Specific File
        // https://www.figma.com/file/:key/:title?node-id=:id. // File Nodes (Pages)

        this.baseUrl = `https://api.figma.com/files/${fileKey}/nodes`;
        this.apiToken = apiToken;
    }



    /**
     * Request the current content of the figma file.
     */
    private request() {

        // TODO: Async do a blocking call
        // Request remote data
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