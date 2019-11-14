"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const internal_1 = require("../internal");
/**
 * Setup the tasks from this package
 * @param {any} originalExports The original exports object in the scope of the gulpfile importing this
 */
function setupGulp(originalExports) {
    let context = new internal_1.GulpContext();
    let gulpTasks = internal_1.getGulpTasks(context);
    for (let task of gulpTasks.allTasks) {
        if (task.displayName === undefined)
            throw new Error('Task missing displayName!');
        originalExports[task.displayName] = task;
    }
    originalExports.default = (done) => {
        console.info('There is no default task');
        done();
        process.exit(0);
    };
}
exports.default = setupGulp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dXAuanMiLCJzb3VyY2VSb290IjoiLi9Tb3VyY2UvIiwic291cmNlcyI6WyJHdWxwL3NldHVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7OztnR0FHZ0c7QUFDaEcsMENBQXdEO0FBQ3hEOzs7R0FHRztBQUNILFNBQXdCLFNBQVMsQ0FBQyxlQUFvQjtJQUNsRCxJQUFJLE9BQU8sR0FBRyxJQUFJLHNCQUFXLEVBQUUsQ0FBQztJQUNoQyxJQUFJLFNBQVMsR0FBRyx1QkFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLEtBQUssSUFBSSxJQUFJLElBQUksU0FBUyxDQUFDLFFBQVEsRUFBRztRQUNsQyxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUztZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUNqRixlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQztLQUM1QztJQUNELGVBQWUsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUE2QixFQUFFLEVBQUU7UUFDeEQsT0FBTyxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3pDLElBQUksRUFBRSxDQUFDO1FBQ1AsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQixDQUFDLENBQUE7QUFDTCxDQUFDO0FBWkQsNEJBWUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgRG9saXR0bGUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5pbXBvcnQgeyBHdWxwQ29udGV4dCwgZ2V0R3VscFRhc2tzIH0gZnJvbSAnLi4vaW50ZXJuYWwnO1xuLyoqXG4gKiBTZXR1cCB0aGUgdGFza3MgZnJvbSB0aGlzIHBhY2thZ2VcbiAqIEBwYXJhbSB7YW55fSBvcmlnaW5hbEV4cG9ydHMgVGhlIG9yaWdpbmFsIGV4cG9ydHMgb2JqZWN0IGluIHRoZSBzY29wZSBvZiB0aGUgZ3VscGZpbGUgaW1wb3J0aW5nIHRoaXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0dXBHdWxwKG9yaWdpbmFsRXhwb3J0czogYW55KSB7XG4gICAgbGV0IGNvbnRleHQgPSBuZXcgR3VscENvbnRleHQoKTtcbiAgICBsZXQgZ3VscFRhc2tzID0gZ2V0R3VscFRhc2tzKGNvbnRleHQpO1xuICAgIGZvciAobGV0IHRhc2sgb2YgZ3VscFRhc2tzLmFsbFRhc2tzICkge1xuICAgICAgICBpZiAodGFzay5kaXNwbGF5TmFtZSA9PT0gdW5kZWZpbmVkKSB0aHJvdyBuZXcgRXJyb3IoJ1Rhc2sgbWlzc2luZyBkaXNwbGF5TmFtZSEnKTtcbiAgICAgICAgb3JpZ2luYWxFeHBvcnRzW3Rhc2suZGlzcGxheU5hbWVdID0gdGFzaztcbiAgICB9XG4gICAgb3JpZ2luYWxFeHBvcnRzLmRlZmF1bHQgPSAoZG9uZTogKGVycm9yPzogRXJyb3IpID0+IHZvaWQpID0+IHtcbiAgICAgICAgY29uc29sZS5pbmZvKCdUaGVyZSBpcyBubyBkZWZhdWx0IHRhc2snKTtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgICBwcm9jZXNzLmV4aXQoMCk7XG4gICAgfVxufVxuIl19