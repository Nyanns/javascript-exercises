const palindromes = function (string) {
    // Set karakter valid yang diperbolehkan (huruf dan angka)
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    // Ubah string menjadi lowercase, pisahkan menjadi array karakter, 
    // filter hanya karakter yang valid, lalu gabungkan kembali menjadi string bersih
    const cleanString = string.toLowerCase().split('').filter((character) => alphanumerical.includes(character)).join('');

    // Balikkan string bersih
    const reverseString = cleanString.split('').reverse().join('');

    // Periksa apakah string bersih sama dengan versi yang dibalik
    if (cleanString === reverseString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
