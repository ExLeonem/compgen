
class Pipeline {

    packages: Package[];
    

    constructor(packages: Package[]) {
        this.packages = packages;
    }


    /**
     * Add a package to the pipeline
     */
    addPackage(newPackage: Package): void {
        
        // Set interoperabilities
        for (let i = 0; i < this.packages.length; i++) {
            let currentPackage: Package = this.packages[i];
            currentPackage.interopt(newPackage);
        }

        // Add package to pipeline
        this.packages.push(newPackage);
    }
}



/**
 * Set Interoperability between different packages
 */
interface Interopt {
    interoptConflicts: string[],
    interopt(otherPackage: Package): void,
}

interface IConfig {
    config: object;
    getConfig(): object
}

/**
 * 
 * @class 
 */
class Package {

    name: string;
    version: string;

    constructor(name: string, version: string) {
        this.name = name;
        this.version = version;
    }
}




/**
 * Jest package class.
 */
class PJest extends Package {

    config: object;

    constructor() {
        super("jest", ">=1.0.0");
        this.config = {};
    }



    interopt(otherPackage: Package) {
        
    }


    getConfig() {
        return this.config;
    }
}