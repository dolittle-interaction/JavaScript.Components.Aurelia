import { Project } from "@dolittle/typescript.build";
export declare type SetupCallback = (w: any) => void;
export declare class WallabySetup {
    private _w;
    private _project;
    private _setupCallback?;
    private _setup;
    constructor(_w: any, _project: Project, _setupCallback?: SetupCallback | undefined);
    readonly setup: (wallaby: any) => void;
    private getFunctionBody;
    private getSetupFunction;
}
