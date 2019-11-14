"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const typescript_build_1 = require("@dolittle/typescript.build");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const internal_1 = require("../internal");
function wallaby(settingsCallback, setupCallback) {
    return (wallaby) => {
        let project = new typescript_build_1.Project(process.cwd());
        let setup = new internal_1.WallabySetup(wallaby, project, setupCallback);
        let settings = new internal_1.WallabySettings(wallaby, project, setup, settingsCallback);
        setNodePath(wallaby, project);
        if (typeof settingsCallback === 'function')
            settingsCallback(wallaby, settings);
        return settings.settings;
    };
}
exports.wallaby = wallaby;
function setNodePath(w, project) {
    let nodePath = w.projectCacheDir;
    if (fs_1.default.existsSync(path_1.default.join(project.sources.rootFolder, typescript_build_1.ProjectSources.sourceFileFolderName))) {
        nodePath = path_1.default.join(nodePath, typescript_build_1.ProjectSources.sourceFileFolderName);
    }
    process.env.NODE_PATH = nodePath;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbGFieS5qcyIsInNvdXJjZVJvb3QiOiIuL1NvdXJjZS8iLCJzb3VyY2VzIjpbIldhbGxhYnkvd2FsbGFieS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Z0dBR2dHO0FBQ2hHLGlFQUFtRTtBQUNuRSw0Q0FBb0I7QUFDcEIsZ0RBQXdCO0FBQ3hCLDBDQUFvRztBQUVwRyxTQUFnQixPQUFPLENBQUMsZ0JBQTBDLEVBQUUsYUFBNkI7SUFDN0YsT0FBTyxDQUFDLE9BQVksRUFBRSxFQUFFO1FBQ3BCLElBQUksT0FBTyxHQUFHLElBQUksMEJBQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN6QyxJQUFJLEtBQUssR0FBRyxJQUFJLHVCQUFZLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQTtRQUM3RCxJQUFJLFFBQVEsR0FBRyxJQUFJLDBCQUFlLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUU5RSxXQUFXLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBRTdCLElBQUksT0FBTyxnQkFBZ0IsS0FBSyxVQUFVO1lBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2hGLE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQztJQUM3QixDQUFDLENBQUM7QUFDTixDQUFDO0FBWEQsMEJBV0M7QUFFRCxTQUFTLFdBQVcsQ0FBQyxDQUFNLEVBQUUsT0FBZ0I7SUFDekMsSUFBSSxRQUFRLEdBQVcsQ0FBQyxDQUFDLGVBQWUsQ0FBQztJQUN6QyxJQUFJLFlBQUUsQ0FBQyxVQUFVLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxpQ0FBYyxDQUFDLG9CQUFvQixDQUFDLENBQUMsRUFBRTtRQUMzRixRQUFRLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsaUNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0tBQ3ZFO0lBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0FBQ3JDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgRG9saXR0bGUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5pbXBvcnQge1Byb2plY3QsIFByb2plY3RTb3VyY2VzfSBmcm9tICdAZG9saXR0bGUvdHlwZXNjcmlwdC5idWlsZCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBXYWxsYWJ5U2V0dGluZ3NDYWxsYmFjaywgU2V0dXBDYWxsYmFjaywgV2FsbGFieVNldHRpbmdzLCBXYWxsYWJ5U2V0dXAgfSBmcm9tICcuLi9pbnRlcm5hbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB3YWxsYWJ5KHNldHRpbmdzQ2FsbGJhY2s/OiBXYWxsYWJ5U2V0dGluZ3NDYWxsYmFjaywgc2V0dXBDYWxsYmFjaz86IFNldHVwQ2FsbGJhY2spIHtcbiAgICByZXR1cm4gKHdhbGxhYnk6IGFueSkgPT4ge1xuICAgICAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2Nlc3MuY3dkKCkpO1xuICAgICAgICBsZXQgc2V0dXAgPSBuZXcgV2FsbGFieVNldHVwKHdhbGxhYnksIHByb2plY3QsIHNldHVwQ2FsbGJhY2spXG4gICAgICAgIGxldCBzZXR0aW5ncyA9IG5ldyBXYWxsYWJ5U2V0dGluZ3Mod2FsbGFieSwgcHJvamVjdCwgc2V0dXAsIHNldHRpbmdzQ2FsbGJhY2spO1xuICAgICAgICBcbiAgICAgICAgc2V0Tm9kZVBhdGgod2FsbGFieSwgcHJvamVjdClcblxuICAgICAgICBpZiAodHlwZW9mIHNldHRpbmdzQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHNldHRpbmdzQ2FsbGJhY2sod2FsbGFieSwgc2V0dGluZ3MpO1xuICAgICAgICByZXR1cm4gc2V0dGluZ3Muc2V0dGluZ3M7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gc2V0Tm9kZVBhdGgodzogYW55LCBwcm9qZWN0OiBQcm9qZWN0KSB7XG4gICAgbGV0IG5vZGVQYXRoOiBzdHJpbmcgPSB3LnByb2plY3RDYWNoZURpcjtcbiAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvamVjdC5zb3VyY2VzLnJvb3RGb2xkZXIsIFByb2plY3RTb3VyY2VzLnNvdXJjZUZpbGVGb2xkZXJOYW1lKSkpIHtcbiAgICAgICAgbm9kZVBhdGggPSBwYXRoLmpvaW4obm9kZVBhdGgsIFByb2plY3RTb3VyY2VzLnNvdXJjZUZpbGVGb2xkZXJOYW1lKTtcbiAgICB9XG5cbiAgICBwcm9jZXNzLmVudi5OT0RFX1BBVEggPSBub2RlUGF0aDtcbn0iXX0=
