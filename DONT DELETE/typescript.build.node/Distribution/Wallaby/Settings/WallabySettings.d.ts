import { Project } from "@dolittle/typescript.build";
import { WallabySetup } from "../../internal";
declare type WallabyFilePattern = string | {
    pattern: string;
    instrument?: boolean;
    ignore?: boolean;
};
export declare type WallabySettingsCallback = (wallaby: any, settings: any) => void;
export declare class WallabySettings {
    private _wallaby;
    private _project;
    private _setup;
    private _settingsCallback?;
    private _files;
    private _tests;
    private _compilers;
    constructor(_wallaby: any, _project: Project, _setup: WallabySetup, _settingsCallback?: WallabySettingsCallback | undefined);
    readonly settings: {
        files: WallabyFilePattern[];
        tests: WallabyFilePattern[];
        compilers: any;
        setup: (wallaby: any) => void;
        testFramework: string;
        env: {
            type: string;
            runner: string;
        };
    };
    readonly files: WallabyFilePattern[];
    readonly tests: WallabyFilePattern[];
    readonly compilers: any;
    private createFiles;
    private createTests;
    private createCompilers;
    private getBaseFiles;
    private globsAsRelativeGlobs;
    private getRelativePathToSource;
}
export {};
