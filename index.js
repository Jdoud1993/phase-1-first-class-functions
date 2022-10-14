function callback () {
    return `Josh`
}

function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return callback
}

function returnsAnAnonymousFunction() {
    return function () {
        return `the job is done`
    }
}
