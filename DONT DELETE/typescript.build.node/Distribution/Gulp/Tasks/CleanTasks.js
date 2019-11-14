"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const rimraf_1 = __importDefault(require("rimraf"));
const slash_1 = __importDefault(require("slash"));
const internal_1 = require("../../internal");
class CleanTasks {
    constructor(_context) {
        this._context = _context;
    }
    get cleanTask() {
        if (this._cleanTask === undefined) {
            this._cleanTask = internal_1.createTask(this._context, 'clean', true, workspace => {
                let projectSources = workspace !== undefined ? workspace.sources : this._context.project.sources;
                return done => rimraf_1.default(projectSources.outputFolder, error => done(error));
            });
        }
        return this._cleanTask;
    }
    get testsCleanTask() {
        if (this._testsCleanTask === undefined) {
            this._testsCleanTask = internal_1.createTask(this._context, 'test-clean', true, workspace => {
                let projectSources = workspace !== undefined ? workspace.sources : this._context.project.sources;
                return done => rimraf_1.default(`${slash_1.default(projectSources.outputFolder)}/**/for_*`, error => done(error));
            });
        }
        return this._testsCleanTask;
    }
    get allTasks() {
        return [this.cleanTask, this.testsCleanTask];
    }
}
exports.CleanTasks = CleanTasks;
function getCleanTasks(context) {
    if (CleanTasks.cleanTasks === undefined)
        CleanTasks.cleanTasks = new CleanTasks(context);
    return CleanTasks.cleanTasks;
}
exports.getCleanTasks = getCleanTasks;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xlYW5UYXNrcy5qcyIsInNvdXJjZVJvb3QiOiIuL1NvdXJjZS8iLCJzb3VyY2VzIjpbIkd1bHAvVGFza3MvQ2xlYW5UYXNrcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Z0dBR2dHO0FBQ2hHLG9EQUE0QjtBQUU1QixrREFBK0I7QUFDL0IsNkNBQXlEO0FBRXpELE1BQWEsVUFBVTtJQU1uQixZQUFvQixRQUFxQjtRQUFyQixhQUFRLEdBQVIsUUFBUSxDQUFhO0lBQUcsQ0FBQztJQUU3QyxJQUFJLFNBQVM7UUFDVCxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFFO1lBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcscUJBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUcsU0FBUyxDQUFDLEVBQUU7Z0JBQ3BFLElBQUksY0FBYyxHQUFHLFNBQVMsS0FBSyxTQUFTLENBQUEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztnQkFDaEcsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFNLENBQUMsY0FBYyxDQUFDLFlBQWEsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzlFLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFFRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUdELElBQUksY0FBYztRQUNkLElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxTQUFTLEVBQUU7WUFDcEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxxQkFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsRUFBRTtnQkFDN0UsSUFBSSxjQUFjLEdBQUcsU0FBUyxLQUFLLFNBQVMsQ0FBQSxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO2dCQUNoRyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsZ0JBQU0sQ0FBQyxHQUFHLGVBQVUsQ0FBQyxjQUFjLENBQUMsWUFBYSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3hHLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFFRCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDaEMsQ0FBQztJQUNELElBQUksUUFBUTtRQUNSLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBQ0o7QUFqQ0QsZ0NBaUNDO0FBRUQsU0FBZ0IsYUFBYSxDQUFDLE9BQW9CO0lBQzlDLElBQUksVUFBVSxDQUFDLFVBQVUsS0FBSyxTQUFTO1FBQUUsVUFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6RixPQUFPLFVBQVUsQ0FBQyxVQUFVLENBQUM7QUFDakMsQ0FBQztBQUhELHNDQUdDIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIERvbGl0dGxlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuaW1wb3J0IHJpbXJhZiBmcm9tICdyaW1yYWYnO1xuaW1wb3J0IHtUYXNrRnVuY3Rpb259IGZyb20gJ3VuZGVydGFrZXInO1xuaW1wb3J0IHRvVW5peFBhdGggZnJvbSAnc2xhc2gnO1xuaW1wb3J0IHsgR3VscENvbnRleHQsIGNyZWF0ZVRhc2sgfSBmcm9tICcuLi8uLi9pbnRlcm5hbCc7XG5cbmV4cG9ydCBjbGFzcyBDbGVhblRhc2tzIHtcbiAgICBzdGF0aWMgY2xlYW5UYXNrczogQ2xlYW5UYXNrc1xuXG4gICAgcHJpdmF0ZSBfdGVzdHNDbGVhblRhc2shOiBUYXNrRnVuY3Rpb25cbiAgICBwcml2YXRlIF9jbGVhblRhc2shOiBUYXNrRnVuY3Rpb25cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbnRleHQ6IEd1bHBDb250ZXh0KSB7fVxuXG4gICAgZ2V0IGNsZWFuVGFzaygpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NsZWFuVGFzayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9jbGVhblRhc2sgPSBjcmVhdGVUYXNrKHRoaXMuX2NvbnRleHQsICdjbGVhbicsIHRydWUsICB3b3Jrc3BhY2UgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0U291cmNlcyA9IHdvcmtzcGFjZSAhPT0gdW5kZWZpbmVkPyB3b3Jrc3BhY2Uuc291cmNlcyA6IHRoaXMuX2NvbnRleHQucHJvamVjdC5zb3VyY2VzO1xuICAgICAgICAgICAgICAgIHJldHVybiBkb25lID0+IHJpbXJhZihwcm9qZWN0U291cmNlcy5vdXRwdXRGb2xkZXIhLCBlcnJvciA9PiBkb25lKGVycm9yKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9jbGVhblRhc2s7XG4gICAgfVxuXG5cbiAgICBnZXQgdGVzdHNDbGVhblRhc2soKSB7XG4gICAgICAgIGlmICh0aGlzLl90ZXN0c0NsZWFuVGFzayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl90ZXN0c0NsZWFuVGFzayA9IGNyZWF0ZVRhc2sodGhpcy5fY29udGV4dCwgJ3Rlc3QtY2xlYW4nLCB0cnVlLCB3b3Jrc3BhY2UgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0U291cmNlcyA9IHdvcmtzcGFjZSAhPT0gdW5kZWZpbmVkPyB3b3Jrc3BhY2Uuc291cmNlcyA6IHRoaXMuX2NvbnRleHQucHJvamVjdC5zb3VyY2VzO1xuICAgICAgICAgICAgICAgIHJldHVybiBkb25lID0+IHJpbXJhZihgJHt0b1VuaXhQYXRoKHByb2plY3RTb3VyY2VzLm91dHB1dEZvbGRlciEpfS8qKi9mb3JfKmAsIGVycm9yID0+IGRvbmUoZXJyb3IpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHJldHVybiB0aGlzLl90ZXN0c0NsZWFuVGFzaztcbiAgICB9XG4gICAgZ2V0IGFsbFRhc2tzKCkge1xuICAgICAgICByZXR1cm4gW3RoaXMuY2xlYW5UYXNrLCB0aGlzLnRlc3RzQ2xlYW5UYXNrXTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGVhblRhc2tzKGNvbnRleHQ6IEd1bHBDb250ZXh0KSB7XG4gICAgaWYgKENsZWFuVGFza3MuY2xlYW5UYXNrcyA9PT0gdW5kZWZpbmVkKSBDbGVhblRhc2tzLmNsZWFuVGFza3MgPSBuZXcgQ2xlYW5UYXNrcyhjb250ZXh0KTtcbiAgICByZXR1cm4gQ2xlYW5UYXNrcy5jbGVhblRhc2tzO1xufSJdfQ==