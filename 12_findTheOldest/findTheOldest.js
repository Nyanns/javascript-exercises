const findTheOldest = function (people) {
    // Fungsi untuk menghitung usia
    function getAge(yearOfDeath, yearOfBirth) {
        // Jika orang masih hidup (belum ada yearOfDeath), gunakan tahun saat ini
        const currentYear = new Date().getFullYear();
        return (yearOfDeath || currentYear) - yearOfBirth;
    }

    // Sortir orang dari yang paling tua ke yang paling muda berdasarkan umur
    const oldestPerson = people.sort((a, b) => {
        const ageA = getAge(a.yearOfDeath, a.yearOfBirth);
        const ageB = getAge(b.yearOfDeath, b.yearOfBirth);
        return ageB - ageA; // Urutkan dari yang tertua ke yang termuda
    })[0]; // Ambil orang tertua (yang pertama setelah pengurutan)

    return oldestPerson; // Kembalikan objek orang tertua
};

// Do not edit below this line
module.exports = findTheOldest;
