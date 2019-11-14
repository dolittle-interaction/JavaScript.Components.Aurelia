import { WallabySettingsCallback, SetupCallback } from '../internal';
export declare function wallaby(settingsCallback?: WallabySettingsCallback, setupCallback?: SetupCallback): (wallaby: any) => {
    files: (string | {
        pattern: string;
        instrument?: boolean | undefined;
        ignore?: boolean | undefined;
    })[];
    tests: (string | {
        pattern: string;
        instrument?: boolean | undefined;
        ignore?: boolean | undefined;
    })[];
    compilers: any;
    setup: (wallaby: any) => void;
    testFramework: string;
    env: {
        type: string;
        runner: string;
    };
};
