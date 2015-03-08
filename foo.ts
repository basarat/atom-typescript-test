import bar = require('./bar');

function foo() {
    console.log('foo');
    bar();
}

export = foo;
