import { TaskFunction } from 'undertaker';
import { GulpContext } from '../../internal';
export declare class CleanTasks {
    private _context;
    static cleanTasks: CleanTasks;
    private _testsCleanTask;
    private _cleanTask;
    constructor(_context: GulpContext);
    readonly cleanTask: TaskFunction;
    readonly testsCleanTask: TaskFunction;
    readonly allTasks: TaskFunction[];
}
export declare function getCleanTasks(context: GulpContext): CleanTasks;
