
class Bar {
    constructor() {
        console.log('bar');
    }
}

function bar() {
    new Bar();
}

function foo() {
    console.log('foo');
    bar();
}

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
