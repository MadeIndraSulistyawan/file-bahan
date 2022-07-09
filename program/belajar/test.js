// menggunakan 2 loop


// var jmlhAngkot = 10
// var angkot = 1;
// var angkotAktif = 2;
// while(angkot <= angkotAktif){
//     console.log('Angkot No. ' + angkot + " beroperasi dengan baik")
//     angkot++;
// }

// for(noAngkot = angkotAktif + 1; noAngkot <=10; noAngkot++){
//     console.log('Angkot No. ' + noAngkot + " tidak beroperasi dengan baik")
// }


// *************************************************
// hanya menggunakan 1 looop

//---------------------
// var jmlhAngkot = 10
// var angkotBeroperasi = 6;
// var noAngkot = 1;

//                     // kurang dari
// for(noAngkot; noAngkot <= jmlhAngkot; noAngkot++){
//     if(noAngkot <=6 ){
//         console.log('angkot No.' + noAngkot + ' beroperasi dengan baik')
//     }else{
//         console.log('angkot No.' + noAngkot + ' tidak beroperasi dengan baik')
    
//     }
// }
// --------------------------


// angkot v4 *********************************************
// penggunaan else if


// var jmlhAngkot = 10,
//     angkotBeroperasi = 6;

// for(var noAngkot = 1; noAngkot <= 10; noAngkot++) {
    //     if(noAngkot <= angkotBeroperasi) {
        //         console.log('angkot No.' + noAngkot + ' beroperasi dengan baik');
//     } else if(noAngkot === 8) {
    //         console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
//     }else if(noAngkot === 10) {
//         console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
//     }
//     else{
//         console.log('angkot No.' + noAngkot + ' tidak beroperasi dengan baik');
// }};

// angkot v5 *********************************************

// else if opsi 2
// var jmlhAngkot = 10,
// angkotBeroperasi = 6;

// for(var noAngkot = 1; noAngkot <= 10; noAngkot++) {
//     if(noAngkot <= angkotBeroperasi) {
//         console.log('angkot No.' + noAngkot + ' beroperasi dengan baik');
//     } else if(noAngkot === 8 || noAngkot === 10) {
//         console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
//     }else{
//         console.log('angkot No.' + noAngkot + ' tidak beroperasi dengan baik');
// }};

// angkot v6 *********************************************
// kondisi angkot no 5 tidak masuk kondisi no 1 / di if


// var jmlhAngkot = 10,
// angkotBeroperasi = 6;

// for(var noAngkot = 1; noAngkot <= 10; noAngkot++) {
//              // operator && harus 2 2 nya true
//     if(noAngkot <= 6 && noAngkot !== 5) {
//         console.log('angkot No.' + noAngkot + ' beroperasi dengan baik');
//     } else if(noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
//         console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
//     }else{
//         console.log('angkot No.' + noAngkot + ' tidak beroperasi dengan baik');
// }};