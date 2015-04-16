/// <reference path="./typings/tsd"/>

import foo = require('./foo');

export function activate(state) {
    console.log('start');
    foo();
    console.log('end');
}

export function deactivate() {
}

export function serialize() {
    return {};
}

export function deserialize() {
}
