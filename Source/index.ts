import { PLATFORM } from 'aurelia-pal';
import globals from './globals';

export function configure(aurelia: any, config: any) {
    //config();

    aurelia.globalResources(PLATFORM.moduleName('./Interaction/RoutedEvent'));
    aurelia.globalResources(PLATFORM.moduleName('./Templating/HierarchyRepeat'));
    aurelia.globalResources(PLATFORM.moduleName('./Templating/HierarchyRepeatChildren'));
    aurelia.globalResources(PLATFORM.moduleName('./Controls/AcrylicCard/AcrylicCard'), PLATFORM.moduleName('./Controls/AcrylicCard/AcrylicCard.html'));
    aurelia.globalResources(PLATFORM.moduleName('./Controls/CommandBar/CommandBar'), PLATFORM.moduleName('./Controls/CommandBar/CommandBar.html'));
    aurelia.globalResources(PLATFORM.moduleName('./Controls/CommandBar/CommandBarButton'), PLATFORM.moduleName('./Controls/CommandBar/CommandBarButton.html'));
    aurelia.globalResources(PLATFORM.moduleName('./Controls/ExpandableCard/ExpandableCard'), PLATFORM.moduleName('./Controls/ExpandableCard/ExpandableCard.html'));
    aurelia.globalResources(PLATFORM.moduleName('./Controls/FlexibleLayout/FlexibleLayout'), PLATFORM.moduleName('./Controls/FlexibleLayout/FlexibleLayout.html'));
    aurelia.globalResources(PLATFORM.moduleName('./Controls/NavigationView/NavigationView'), PLATFORM.moduleName('./Controls/NavigationView/NavigationView.html'));
    aurelia.globalResources(PLATFORM.moduleName('./Controls/NavigationView/NavigationViewItem'), PLATFORM.moduleName('./Controls/NavigationView/NavigationViewItem.html'));
    aurelia.globalResources(PLATFORM.moduleName('./Controls/NavigationView/NavigationViewItemSeparator'), PLATFORM.moduleName('./Controls/NavigationView/NavigationViewItemSeparator.html'));
    aurelia.globalResources(PLATFORM.moduleName('./Controls/PivotView/PivotView'), PLATFORM.moduleName('./Controls/PivotView/PivotView.html'));
    aurelia.globalResources(PLATFORM.moduleName('./Controls/PivotView/PivotItem'), PLATFORM.moduleName('./Controls/PivotView/PivotItem.html'));
    aurelia.globalResources(PLATFORM.moduleName('./Controls/MenuList/MenuList'), PLATFORM.moduleName('./Controls/MenuList/MenuList.html'));
    aurelia.globalResources(PLATFORM.moduleName('./Controls/MenuList/MenuListItem'), PLATFORM.moduleName('./Controls/MenuList/MenuListItem.html'));
    aurelia.globalResources(PLATFORM.moduleName('./Controls/TextField/TextField'), PLATFORM.moduleName('./Controls/TextField/TextField.html'));
    //globals.iconBaseFolder = config.iconBaseFolder;
}
