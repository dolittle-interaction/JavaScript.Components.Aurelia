import { PLATFORM } from 'aurelia-pal';
import globals from './globals';

export function configure(aurelia: any, config: any) {
    //config();

    aurelia.globalResources(PLATFORM.moduleName('./Interaction/RoutedEvent'));
    aurelia.globalResources(PLATFORM.moduleName('./Templating/HierarchyRepeat'));
    aurelia.globalResources(PLATFORM.moduleName('./Templating/HierarchyRepeatChildren'));
    aurelia.globalResources(PLATFORM.moduleName('./AcrylicCard/AcrylicCard'), PLATFORM.moduleName('./AcrylicCard/AcrylicCard.html'));
    aurelia.globalResources(PLATFORM.moduleName('./CommandBar/CommandBar'), PLATFORM.moduleName('./CommandBar/CommandBar.html'));
    aurelia.globalResources(PLATFORM.moduleName('./CommandBar/CommandBarButton'), PLATFORM.moduleName('./CommandBar/CommandBarButton.html'));
    aurelia.globalResources(PLATFORM.moduleName('./ExpandableCard/ExpandableCard'), PLATFORM.moduleName('./ExpandableCard/ExpandableCard.html'));
    aurelia.globalResources(PLATFORM.moduleName('./NavigationView/NavigationView'), PLATFORM.moduleName('./NavigationView/NavigationView.html'));
    aurelia.globalResources(PLATFORM.moduleName('./NavigationView/NavigationViewItem'), PLATFORM.moduleName('./NavigationView/NavigationViewItem.html'));
    aurelia.globalResources(PLATFORM.moduleName('./NavigationView/NavigationViewItemSeparator'), PLATFORM.moduleName('./NavigationView/NavigationViewItemSeparator.html'));
    aurelia.globalResources(PLATFORM.moduleName('./PivotView/PivotView'), PLATFORM.moduleName('./PivotView/PivotView.html'));
    aurelia.globalResources(PLATFORM.moduleName('./PivotView/PivotItem'), PLATFORM.moduleName('./PivotView/PivotItem.html'));
    aurelia.globalResources(PLATFORM.moduleName('./MenuList/MenuList'), PLATFORM.moduleName('./MenuList/MenuList.html'));
    aurelia.globalResources(PLATFORM.moduleName('./MenuList/MenuListItem'), PLATFORM.moduleName('./MenuList/MenuListItem.html'));
    aurelia.globalResources(PLATFORM.moduleName('./TextField/TextField'), PLATFORM.moduleName('./TextField/TextField.html'));
    //globals.iconBaseFolder = config.iconBaseFolder;
}
