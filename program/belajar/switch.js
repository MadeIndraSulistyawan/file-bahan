// switch(ekspresi) {
//     case 'nilai 1':
//         aksi 1
//         break;
//     case 'nilai 2':
//         aksi 2
//         break;
//     case 'nilai n':
//         aksi n
//         break;
//     default:
//         aksi default
//         break;
// }


// contoh***************
// var angka = prompt('masukan angka');

// switch(angka){
//     case '1' :
//         alert('anda memasukan angka 1');
//         break;
//     case '2' :
//         alert('anda memasukan angka 2');
//         break;
//     case '3' :
//         alert('anda memasukan angka 3');
//         break;
//     default:
//         alert('angka yang anda masukan salah')
// }

var item = prompt('masukan nama makanan/minuman : \n (cth: nasi, daging, susu, hamburger, cola');
switch(item){
    case 'nasi':
        alert('makanan/minuman sehat')
            break;
    case 'daging':
        alert('makanan/minuman sehat')
            break;
    case 'susu':
        alert('makanan/minuman sehat')
            break;

// bisa juga seperti ini
    case 'hamburger':
    case 'cola':
        alert('makanan/minuman tidak sehat')
            break;
    default:
        alert('makanan tidak ada')
}