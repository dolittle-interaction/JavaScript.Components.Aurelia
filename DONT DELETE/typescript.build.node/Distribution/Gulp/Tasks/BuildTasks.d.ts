import { TaskFunction } from 'undertaker';
import { GulpContext } from '../../internal';
export declare class BuildTasks {
    private _context;
    static buildTasks: BuildTasks;
    private _buildTask;
    constructor(_context: GulpContext);
    readonly buildTask: TaskFunction;
    readonly allTasks: TaskFunction[];
    private createBuildTask;
    private createWorkspacesBuildTask;
}
export declare function getBuildTasks(context: GulpContext): BuildTasks;
