/// <reference path='../../type_definitions/angular-protractor.d.ts' />

import ExceptionBase from './exception-base';

export default class NotImplementedException extends ExceptionBase {
    name: string = 'NotImplementedException';
}