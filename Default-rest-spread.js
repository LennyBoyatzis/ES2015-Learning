function f(x, y = 12) {
    return x + y;
}
f(3) == 15

function f(x, ...y) {
    return x * y.length;
}

f(3, 'hello', true) == 6

function f(x, y, z) {
    return x + y +z;
}

f(...[1,2,3]) == 6
