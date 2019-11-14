"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const gulp_1 = __importDefault(require("gulp"));
const gulp_mocha_1 = __importDefault(require("gulp-mocha"));
const internal_1 = require("../../internal");
class TestTasks {
    constructor(_context) {
        this._context = _context;
    }
    get runTestsTask() {
        if (this._runTestsTask === undefined) {
            this._runTestsTask = internal_1.createTask(this._context, 'test-run', false, workspace => {
                let projectSources = workspace !== undefined ? workspace.sources : this._context.project.sources;
                return done => gulp_1.default.src(projectSources.compiledTestsGlobs.includes.concat(projectSources.sourceFileGlobs.excludes.map(_ => '!' + _)), { read: false })
                    .pipe(gulp_mocha_1.default({ reporter: 'spec', require: ['@dolittle/typescript.build/mocha.opts'] }))
                    .on('end', done);
            });
        }
        return this._runTestsTask;
    }
    get testTask() {
        if (this._testTask === undefined) {
            this._testTask = gulp_1.default.series(internal_1.getBuildTasks(this._context).buildTask, this.runTestsTask);
            this._testTask.displayName = 'test';
        }
        return this._testTask;
    }
    get allTasks() {
        return [this.testTask, this.runTestsTask];
    }
}
exports.TestTasks = TestTasks;
function getTestTasks(context) {
    if (TestTasks.testTasks === undefined)
        TestTasks.testTasks = new TestTasks(context);
    return TestTasks.testTasks;
}
exports.getTestTasks = getTestTasks;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdFRhc2tzLmpzIiwic291cmNlUm9vdCI6Ii4vU291cmNlLyIsInNvdXJjZXMiOlsiR3VscC9UYXNrcy9UZXN0VGFza3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7O2dHQUdnRztBQUNoRyxnREFBd0I7QUFDeEIsNERBQW1DO0FBRW5DLDZDQUFxRTtBQUVyRSxNQUFhLFNBQVM7SUFNbEIsWUFBb0IsUUFBcUI7UUFBckIsYUFBUSxHQUFSLFFBQVEsQ0FBYTtJQUFHLENBQUM7SUFFN0MsSUFBSSxZQUFZO1FBQ1osSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLFNBQVMsRUFBRTtZQUNsQyxJQUFJLENBQUMsYUFBYSxHQUFHLHFCQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxFQUFFO2dCQUMxRSxJQUFJLGNBQWMsR0FBRyxTQUFTLEtBQUssU0FBUyxDQUFBLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7Z0JBQ2hHLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDO3FCQUNuSSxJQUFJLENBQUMsb0JBQVMsQ0FBQyxFQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsdUNBQXVDLENBQUMsRUFBQyxDQUFDLENBQUM7cUJBQ3ZGLEVBQUUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckMsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUNELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFBSSxRQUFRO1FBQ1IsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQ3hCLHdCQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsRUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FDcEIsQ0FBQztZQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztTQUN2QztRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1IsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlDLENBQUM7Q0FFSjtBQWxDRCw4QkFrQ0M7QUFFRCxTQUFnQixZQUFZLENBQUMsT0FBb0I7SUFDN0MsSUFBSSxTQUFTLENBQUMsU0FBUyxLQUFLLFNBQVM7UUFBRSxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BGLE9BQU8sU0FBUyxDQUFDLFNBQVMsQ0FBQztBQUMvQixDQUFDO0FBSEQsb0NBR0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgRG9saXR0bGUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5pbXBvcnQgZ3VscCBmcm9tICdndWxwJztcbmltcG9ydCBndWxwTW9jaGEgZnJvbSAnZ3VscC1tb2NoYSc7XG5pbXBvcnQge1Rhc2tGdW5jdGlvbn0gZnJvbSAndW5kZXJ0YWtlcic7XG5pbXBvcnQge0d1bHBDb250ZXh0LCBjcmVhdGVUYXNrLCBnZXRCdWlsZFRhc2tzfSBmcm9tICcuLi8uLi9pbnRlcm5hbCdcblxuZXhwb3J0IGNsYXNzIFRlc3RUYXNrcyB7XG4gICAgc3RhdGljIHRlc3RUYXNrczogVGVzdFRhc2tzXG5cbiAgICBwcml2YXRlIF9ydW5UZXN0c1Rhc2shOiBUYXNrRnVuY3Rpb25cbiAgICBwcml2YXRlIF90ZXN0VGFzayE6IFRhc2tGdW5jdGlvblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29udGV4dDogR3VscENvbnRleHQpIHt9XG5cbiAgICBnZXQgcnVuVGVzdHNUYXNrKCkge1xuICAgICAgICBpZiAodGhpcy5fcnVuVGVzdHNUYXNrID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3J1blRlc3RzVGFzayA9IGNyZWF0ZVRhc2sodGhpcy5fY29udGV4dCwgJ3Rlc3QtcnVuJywgZmFsc2UsIHdvcmtzcGFjZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3RTb3VyY2VzID0gd29ya3NwYWNlICE9PSB1bmRlZmluZWQ/IHdvcmtzcGFjZS5zb3VyY2VzIDogdGhpcy5fY29udGV4dC5wcm9qZWN0LnNvdXJjZXM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvbmUgPT4gZ3VscC5zcmMocHJvamVjdFNvdXJjZXMuY29tcGlsZWRUZXN0c0dsb2JzLmluY2x1ZGVzLmNvbmNhdChwcm9qZWN0U291cmNlcy5zb3VyY2VGaWxlR2xvYnMuZXhjbHVkZXMubWFwKF8gPT4gJyEnICsgXykpLCB7cmVhZDogZmFsc2V9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGlwZShndWxwTW9jaGEoe3JlcG9ydGVyOiAnc3BlYycsIHJlcXVpcmU6IFsnQGRvbGl0dGxlL3R5cGVzY3JpcHQuYnVpbGQvbW9jaGEub3B0cyddfSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vbignZW5kJywgZG9uZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fcnVuVGVzdHNUYXNrO1xuICAgIH1cbiAgICBnZXQgdGVzdFRhc2soKSB7XG4gICAgICAgIGlmICh0aGlzLl90ZXN0VGFzayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl90ZXN0VGFzayA9IGd1bHAuc2VyaWVzKFxuICAgICAgICAgICAgICAgIGdldEJ1aWxkVGFza3ModGhpcy5fY29udGV4dCkuYnVpbGRUYXNrLCBcbiAgICAgICAgICAgICAgICB0aGlzLnJ1blRlc3RzVGFza1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuX3Rlc3RUYXNrLmRpc3BsYXlOYW1lID0gJ3Rlc3QnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl90ZXN0VGFzaztcbiAgICB9XG5cbiAgICBnZXQgYWxsVGFza3MoKSB7XG4gICAgICAgIHJldHVybiBbdGhpcy50ZXN0VGFzaywgdGhpcy5ydW5UZXN0c1Rhc2tdO1xuICAgIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGVzdFRhc2tzKGNvbnRleHQ6IEd1bHBDb250ZXh0KSB7XG4gICAgaWYgKFRlc3RUYXNrcy50ZXN0VGFza3MgPT09IHVuZGVmaW5lZCkgVGVzdFRhc2tzLnRlc3RUYXNrcyA9IG5ldyBUZXN0VGFza3MoY29udGV4dCk7XG4gICAgcmV0dXJuIFRlc3RUYXNrcy50ZXN0VGFza3M7XG59Il19