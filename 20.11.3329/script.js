/*
NOTE VAR
tidak bisa pakai nomor di depan
harus memiliki arti
tidak boleh memakai spasi atau -

*/



console.log('Hello World')

let x;
x = 'Budi';


const pi = 3.14;
x = 5;

let namaDepan = 'sigit', namaBelakang = 'nugroho';

let person = {
    nama: 'sigit',
    umur: 12,
    alamat: 'brebes',
}

let array = ['array 1', 'array 2'];

let angka = 100;
let result;

if (angka>80){
    result = 'A';
}

else if (angka>60){
    result = 'B';
}

else if(angka<60){
    result = 'C'
}

else{
    result = 'ABC'
}

// for(let i=1; i<=3; i++){
//     console.log(i)
// }

console.log(result)
console.log(array[1])
console.log(person)
console.log(namaDepan+' '+namaBelakang)
console.log(x)
console.log(pi)