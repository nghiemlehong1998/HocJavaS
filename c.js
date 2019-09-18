function veHinh(n) {
    let x = '';
    for (let i = 0; i < n; i++) {
        console.log(x += '*');
    }
}
veHinh(9);

function doiXung() {}

function inSoChan() {
    console.log('So Chan :');
    for (let i = 0; i <= 100; i = i + 2) {
        console.log(i);
    }
}


function inSoLe() {
    console.log('So Le');
    for (let i = 1; i < 100; i += 2) {
        console.log(i);
    }
}


function inSoChia3Du1() {
    console.log('In so chia 3 du 1 :');
    for (let i = 1; i <= 100; i += 3) {
        console.log(i);
    }
}

function inSoChinhPhuong() {
    console.log('In so chinh phuong :');
    for (let i = 0; i <= 10; i++) {
        console.log(i * i);
    }
}
inSoChinhPhuong();