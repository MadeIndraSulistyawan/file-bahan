// Web Unpas 17 Control Flow menit 4.00*********************************

alert('mulai');
alert('helllo world');
alert('helllo world');
alert('helllo world');
alert('helllo world');
alert('helllo world');
alert('selesai');

//bisa diganti menjadi
alert('mulai');
for(var i = 0; i < 5; i++) {
    alert('hello world')
}
alert('selesai');

// Pengkondisian

var angka = prompt('masukan angka');
if (angka % 2 === 0){
    alert(angka + ' adalah genap')
}else{
    alert(angka + ' adalah ganjil')
}

// Web Unpas 18 Control Flow menit*********************************

// loop yang dihentikan oleh USER
var ulang = true;
while(ulang === true) {//atau while(ulang)
    console.log('hallo')
    ulang = confirm('lagi?')
}


// loop yang dihentikan oleh program

// nilai awal
// while(kondisi terminasi) {
//     aksi
    // increment / decrement                //increment = pertambahan
// }                                        // decrement = pengurangan

var awal = 1;
while(awal <= 5){
    console.log('world');
awal++; //artinya awal + 1
}


// Tips
var nilaiAwal = 1;
while(nilaiAwal <= 10) {
    console.log('hello world' + nilaiAwal + 'x');
nilaiAwal++
}
// expected hello world 1x 2x 3x...

// WEB unpas 25  pengulangan dan pengkodisian bersarang **********************************
