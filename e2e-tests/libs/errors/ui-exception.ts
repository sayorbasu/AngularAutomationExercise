/// <reference path='../../type_definitions/angular-protractor.d.ts' />

import ExceptionBase from './exception-base';

export default class UIException extends ExceptionBase {
    name: string = 'UIException';
}