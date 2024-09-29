const fibonacci = function (number) {
    number = parseInt(number);  // Mengubah input menjadi integer
    if (number < 0) {
        return 'OOPS';  // Mengembalikan 'OOPS' jika number negatif
    } else if (number === 0) {
        return 0;  // Jika number adalah 0, kembalikan 0 (elemen pertama)
    } else if (number === 1) {
        return 1;  // Jika number adalah 1, kembalikan 1 (elemen kedua)
    } else {
        let firstPrev = 1;  // Elemen pertama dari deret Fibonacci
        let secondPrev = 0;  // Elemen kedua dari deret Fibonacci
        for (let i = 2; i <= number; i++) {
            let current = firstPrev + secondPrev;
            secondPrev = firstPrev;
            firstPrev = current;
        }
        return firstPrev;  // Mengembalikan hasil akhir
    }
};

// Do not edit below this line
module.exports = fibonacci;
