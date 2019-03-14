import { PLATFORM } from 'aurelia-pal';
import globals from './globals';

export function configure(aurelia, config) {
  //config();
  
  aurelia.globalResources(PLATFORM.moduleName('./RoutedEvent'));
  aurelia.globalResources(PLATFORM.moduleName('./navigationView/navigationView'), PLATFORM.moduleName('./navigationView/navigationView.html'));
  aurelia.globalResources(PLATFORM.moduleName('./navigationView/navigationViewItem'), PLATFORM.moduleName('./navigationView/navigationViewItem.html'));
  aurelia.globalResources(PLATFORM.moduleName('./navigationView/navigationViewItemSeparator'), PLATFORM.moduleName('./navigationView/navigationViewItemSeparator.html'));
  aurelia.globalResources(PLATFORM.moduleName('./pivotView/pivotView'), PLATFORM.moduleName('./pivotView/pivotView.html'));
  aurelia.globalResources(PLATFORM.moduleName('./pivotView/pivotItem'), PLATFORM.moduleName('./pivotView/pivotItem.html'));
  aurelia.globalResources(PLATFORM.moduleName('./commandBar/commandBar'), PLATFORM.moduleName('./commandBar/commandBar.html'));
  aurelia.globalResources(PLATFORM.moduleName('./menuList/menuList'), PLATFORM.moduleName('./menuList/menuList.html'));
  aurelia.globalResources(PLATFORM.moduleName('./menuList/menuListItem'), PLATFORM.moduleName('./menuList/menuListItem.html'));
  //globals.iconBaseFolder = config.iconBaseFolder;
}
