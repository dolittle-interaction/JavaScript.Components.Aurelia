import { Project } from '@dolittle/typescript.build';
/**
 * Build context
 */
export declare class GulpContext {
    private _project;
    /**
     * Initializes a new instance of {GulpContext}
     */
    constructor();
    /**
     * Gets the {Project} that holds all the meta data for the current project
     *
     * @readonly
     */
    readonly project: Project;
}
