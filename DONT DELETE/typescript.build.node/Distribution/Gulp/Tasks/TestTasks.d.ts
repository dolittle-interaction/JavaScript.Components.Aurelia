import { TaskFunction } from 'undertaker';
import { GulpContext } from '../../internal';
export declare class TestTasks {
    private _context;
    static testTasks: TestTasks;
    private _runTestsTask;
    private _testTask;
    constructor(_context: GulpContext);
    readonly runTestsTask: TaskFunction;
    readonly testTask: TaskFunction;
    readonly allTasks: TaskFunction[];
}
export declare function getTestTasks(context: GulpContext): TestTasks;
