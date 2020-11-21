const childProcess = require('child_process');


/**
 * Defines base package manager functionality.
 * 
 * @class
 */
class PackageManager {
    command: string;
    packages: string[];
    version: string;


    constructor(command: string, packages: string[]) {
        this.command = command;
        this.packages = packages;
        this.version = "";
    }

    dump(): void {

    }

    versionEquals(version: string) {
        return this.version === version;
    }

    setVersion(version: string) {
        this.version = version;
    }
}


/**
 * Actions a specific package manager is able to execute.
 * @interface
 */
interface PMActions {
    install(): void
    // version(): void,
}


/**
 * 
 * 
 * @class 
 */
class NPM extends PackageManager implements PMActions {

    constructor(packages: string[]) {
        super("npm", packages);
    }

    install() {

    }

    setVersion(version: string): void {

        super.setVersion(version);
    }

    ensureDependency(dependencies: string[]) {

        return new Promise((res) => {
            
            for (let dep in dependencies) {
                    
            }

        });

    }
}


class YARN extends PackageManager implements PMActions {

    constructor(packages: string[]) {
        super("yarn", packages);
    }

    install() {

    }

    setVersion(version: string) {
        super.setVersion(version);
    }
}


export default PackageManager;
export {
    NPM,
    YARN
}