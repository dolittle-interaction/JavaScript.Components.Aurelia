import { PLATFORM } from 'aurelia-pal';
import globals from './globals';

export * from './menuItem/menuItem';

export function configure(aurelia, config) {
  config();
  //menuItem(aurelia);
  //aurelia.globalResources(menuItem);
  aurelia.globalResources(PLATFORM.moduleName('./menuItem/menuItem'), PLATFORM.moduleName('./menuItem/menuItem.html'));
  //aurelia.globalResources(PLATFORM.moduleName('checklistItem/checklistItem'));
  /*
    
    
    aurelia.globalResources(PLATFORM.moduleName('sideBar/sideBar'));
    aurelia.globalResources(PLATFORM.moduleName('pivot/pivot'));
    aurelia.globalResources(PLATFORM.moduleName('pivot/pivotItem'));*/

  //globals.iconBaseFolder = config.iconBaseFolder;
}
