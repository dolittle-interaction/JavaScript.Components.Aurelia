import { PLATFORM } from 'aurelia-pal';
import globals from './globals';

export function configure(aurelia, config) {
  //config();
  
  aurelia.globalResources(PLATFORM.moduleName('./menuItem/menuItem'), PLATFORM.moduleName('./menuItem/menuItem.html'));
  aurelia.globalResources(PLATFORM.moduleName('./checklistItem/checklistItem'), PLATFORM.moduleName('./checklistItem/checklistItem.html'));
  aurelia.globalResources(PLATFORM.moduleName('./sideBar/sideBar'), PLATFORM.moduleName('./sideBar/sideBar.html'));
  aurelia.globalResources(PLATFORM.moduleName('./pivotView/pivotView'), PLATFORM.moduleName('./pivotView/pivotView.html'));
  aurelia.globalResources(PLATFORM.moduleName('./pivotView/pivotItem'), PLATFORM.moduleName('./pivotView/pivotItem.html'));
  //globals.iconBaseFolder = config.iconBaseFolder;
}
