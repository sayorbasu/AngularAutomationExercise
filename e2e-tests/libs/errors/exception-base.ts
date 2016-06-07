/// <reference path='../../type_definitions/angular-protractor.d.ts' />

export default class ExceptionBase implements Error {
    name: string;
    message: string;
    stack: any;

    constructor(message?: string) {
        this.message = message;
        this.stack = (<any>new Error()).stack;
    }
}