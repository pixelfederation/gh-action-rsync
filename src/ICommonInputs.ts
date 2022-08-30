export interface ICommonInputs {
    /**
     * Working directory
     */
    dir: string;
    /**
     * Working directory
     */
    user: string;
    /**
     * Rsync paramaters
     */
    parameters: string;
    /**
     * Exclude directories
     */
    exclude: string[];
    /**
     * Source directory
     */
    source: string;
    /**
     * Destinations directories
     */
    destinations: string[];
    /**
     * Rsync delete flag
     */
    delete: boolean;
    /**
     * Rsync be verbose
     */
    verbose: boolean;
    /**
     * Rsync compression level
     */
    compressionLevel: string;
    /**
     * Rsync ssh options
     */
    sshOpts: string[];
    /**
     * Rsync ssh options
     */
    sshParams: string[];
    /**
     * Rsync ssh proxy command
     */
    sshProxyCmd: string;
    /**
     * Rsync create destination directory before sync
     */
    createDstDir: boolean;
    /**
     * Dry-run 
     */
    dryrun: boolean;
}