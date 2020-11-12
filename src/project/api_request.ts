const signale = require('signale');
const axios = require('axios');


/**
 * Requests style sheet content.
 * 
 */
class ApiRequest {

    // Check documentation https://www.figma.com/developers/api#files-endpoints
    apiToken: string;
    fileTitle: string;
    fileKey: string;
    nodeId: string;

    /**
     * @constructs
     */
    constructor() {
        this.apiToken = "";
        this.fileKey = "";
        this.fileTitle = "";
        this.nodeId = "";
    }

    // constructor(apiToken: string, fileKey: string) {
    //     // https://www.figma.com/file/:key/:title // Specific File
    //     // https://www.figma.com/file/:key/:title?node-id=:id. // File Nodes (Pages)
    //     // All files in project
    //     // https://www.figma.com/file/NwglkGOKUBBIACD8GgZUXbbe/conziv?node-id=1452%3A22291
    //     // this.baseUrl = "https://api.figma.com";
    //     this.fileKey = fileKey;
    //     this.baseUrl = `https://api.figma.com/files/${fileKey}/nodes`;
    //     this.apiToken = apiToken;
    // }

    getFile() {
        let base_url = "https://www.figma.com/file/:key/:title?node-id=:id";
        if (this.fileKey && this.fileTitle && this.nodeId) {


            
        }
    }


    /**
     * Execute the api call.
     * 
     * @param url The url of the request
     */
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



    // ----------------
    // Factory Methods
    // -----------------------------

    /**
     * Set the key of the file (project-id) for an api request
     * @param fileKey The key of the file, can be acquired from the url. Open a figma draft and look at the url.
     */
    setFileKey(fileKey: string) {
        this.fileKey = fileKey;
    }

    /**
     * Set the file title (equals the file name) for an api request.
     * @param fileTitle The title of the file can be acquired from the url of an existing figma file.
     */
    setFileTitle(fileTitle: string) {
        this.fileTitle = fileTitle;
    }

    /**
     * Set the node id of the file (equals the page of the file) for an api request.
     * @param nodeId The nodeId of the file can be acquired from the url of an existing figma file. 
     */
    setNodeId(nodeId: string) {
        nodeId = nodeId;
    }
}

export default ApiRequest;