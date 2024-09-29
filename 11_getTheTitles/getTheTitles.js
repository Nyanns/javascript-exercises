const getTheTitles = function (books) {
    // Menggunakan .map() untuk mengambil properti title dari setiap objek book
    const titles = books.map((book) => book.title);
    return titles; // Mengembalikan array berisi judul buku
};

// Do not edit below this line
module.exports = getTheTitles;
