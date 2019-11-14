import { TaskFunction } from 'undertaker';
import { YarnWorkspace } from '@dolittle/typescript.build';
import { GulpContext } from '../../internal';
declare class GulpTasks {
    private _context;
    static gulpTask: GulpTasks;
    constructor(_context: GulpContext);
    readonly cleanTasks: import("./CleanTasks").CleanTasks;
    readonly buildTasks: import("./BuildTasks").BuildTasks;
    readonly testTasks: import("./TestTasks").TestTasks;
    readonly allTasks: TaskFunction[];
}
export declare function getGulpTasks(context: GulpContext): GulpTasks;
export declare function createTask(context: GulpContext, taskName: string, parallel: boolean, createTaskCallback: (workspace?: YarnWorkspace) => TaskFunction): TaskFunction;
export {};
