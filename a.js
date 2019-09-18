function getRandom(n) {
    return Math.round(Math.random() * n);
}


function getRandom2(x, y) {
    return x + getRandom(y - x);
}
console.log(getRandom2(5, 10));

function demo(n) {
    let a = "";
    for (let i = 0; i < n; i++) {
        console.log(a += "*")
    }
}
console.log(5 == "5");
console.log(5 === '5');
console.log(20 / 0 + 'Le Hong Nghiem');
console.log('le hong nghiem');

function nghiemLe() {
    let a = 3;
    a = a + 1;
    return a;
}

console.log(nghiemLe());