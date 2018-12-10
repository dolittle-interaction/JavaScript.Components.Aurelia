import { PLATFORM } from 'aurelia-pal';
import globals from './globals';

export function configure(aurelia, config) {
    aurelia.globalResources(PLATFORM.moduleName('./checklist_item/checklist_item'));
    aurelia.globalResources(PLATFORM.moduleName('./menu_item/menu_item'));
    aurelia.globalResources(PLATFORM.moduleName('./side_bar/side_bar'));

    globals.iconBaseFolder = config.iconBaseFolder;
}
