

/**
 * Defines base package manager functionality.
 * 
 * @class
 */
class PackageManager {
    command: string;
    packages: string[];


    constructor(command: string, packages: string[]) {
        this.command = command;
        this.packages = packages;
    }

    dump(): void {

    }
}


/**
 * Actions a specific package manager is able to execute.
 * @interface
 */
interface PMActions {
    install(): void
    version(): void,
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

    version() {

    }
}


class YARN extends PackageManager implements PMActions {

    constructor(packages: string[]) {
        super("yarn", packages);
    }

    install() {

    }

    version() {

    }

}