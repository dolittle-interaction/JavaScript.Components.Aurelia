"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const typescript_build_1 = require("@dolittle/typescript.build");
/**
 * Build context
 */
class GulpContext {
    /**
     * Initializes a new instance of {GulpContext}
     */
    constructor() {
        process.chdir(process.env.PWD || process.env.INIT_CWD);
        this._project = new typescript_build_1.Project(process.env.PWD);
    }
    /**
     * Gets the {Project} that holds all the meta data for the current project
     *
     * @readonly
     */
    get project() {
        return this._project;
    }
}
exports.GulpContext = GulpContext;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3VscENvbnRleHQuanMiLCJzb3VyY2VSb290IjoiLi9Tb3VyY2UvIiwic291cmNlcyI6WyJHdWxwL0d1bHBDb250ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7OztnR0FHZ0c7QUFDaEcsaUVBQXFEO0FBQ3JEOztHQUVHO0FBQ0gsTUFBYSxXQUFXO0lBRXBCOztPQUVHO0lBQ0g7UUFDSSxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLDBCQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQUksT0FBTztRQUNQLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0NBQ0o7QUFsQkQsa0NBa0JDIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIERvbGl0dGxlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJ0Bkb2xpdHRsZS90eXBlc2NyaXB0LmJ1aWxkJztcbi8qKlxuICogQnVpbGQgY29udGV4dFxuICovXG5leHBvcnQgY2xhc3MgR3VscENvbnRleHQge1xuICAgIHByaXZhdGUgX3Byb2plY3Q6IFByb2plY3RcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyBhIG5ldyBpbnN0YW5jZSBvZiB7R3VscENvbnRleHR9XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHByb2Nlc3MuY2hkaXIocHJvY2Vzcy5lbnYuUFdEIHx8IHByb2Nlc3MuZW52LklOSVRfQ1dEISk7XG4gICAgICAgIHRoaXMuX3Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9jZXNzLmVudi5QV0QpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHtQcm9qZWN0fSB0aGF0IGhvbGRzIGFsbCB0aGUgbWV0YSBkYXRhIGZvciB0aGUgY3VycmVudCBwcm9qZWN0XG4gICAgICpcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKi9cbiAgICBnZXQgcHJvamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2plY3Q7XG4gICAgfVxufVxuIl19