const PI = 3.14159265359;

var jumlahBangunDatar = prompt("Masukkan Jumlah Bangun Datar : ");

for (let i = 0; i < jumlahBangunDatar; i++) {
    let pilihan = prompt("Bangun Datar ke-" + (i+1) + "\n" +
                         "Pilihlah:\n" +
                         "1. Hitung Luas Lingkaran\n" +
                         "2. Hitung Luas Persegi\n" + 
                         "[1/2]");

    if(pilihan == 1) {
        let radius = prompt("Masukkan Jari-jari Lingkaran : ");
        let luas = PI * radius * radius;
        alert("Luas Lingkaran = " + luas);
    }
    else if(pilihan == 2) {
        let sisi = prompt("Masukkan Sisi Persegi : ");
        let luas = sisi * sisi;
        alert("Luas Persegi = " + luas);
    }
}