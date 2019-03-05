import { PLATFORM } from 'aurelia-pal';
import globals from './globals';

export function configure(aurelia, config) {
    aurelia.globalResources(PLATFORM.moduleName('checklistItem/checklistItem'));
    aurelia.globalResources(PLATFORM.moduleName('menuItem/menuItem'));
    aurelia.globalResources(PLATFORM.moduleName('sideBar/sideBar'));
    aurelia.globalResources(PLATFORM.moduleName('pivot/pivot'));
    aurelia.globalResources(PLATFORM.moduleName('pivot/pivotItem'));

    //globals.iconBaseFolder = config.iconBaseFolder;
}
