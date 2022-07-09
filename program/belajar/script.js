// string = "10", "hello world"
// boolean = true false
// number = 10, 29 30

// % (modulus) adalah sisa bagi
var x = 10
x % 3
// expected 1 :::: karena 10 dibagi 3 bersisa 1



// PENUGASAN OPERATOR
'x += y' =      x = x + y
'x -= y' =      x = x - y 
'x *= y' =      x = x * y
'x /= y' =      x = x / y
'x %= y' =      x = x % y


// OPERATOR PERBANDINGAN 
    ==      " sama dengan "       > hanya value 
    !=      " tidak sama dengan " > kebalikan
    ===     "strict sama dengan " > value dan tipe data harus sama 
    !==     "strict tidak sama dengan " > kebalikan ===
    >       "lebih besar dari"          
    <       "lebih kecil dari"      
    >=      "lebih besar sama dengan "
    <=      "lebih kecil sama dengan"

// BOOOLEAN
10 == 10
// true
"Made Indra" == "made indra" //perbedaan huruf besar dan kecil
// false    
10 != 10
// false
15 === 10
// false
15 === "10"
// false
"nama" === "nama"
// true
"15" === "15"
// false

// web unpas 11-------------------------------------------
// LOGIKA OPERATOR

// &&  = AND
// ||  = OR
//  !  = NOT


// 1 EXPRESION OPERATOR
x1 = 5
(x1 % 2 == 0)
// false

x2 = 12
(x2 % 2 == 0)
// true
// 2 operator
(x2 % 2 == 0) && (x2 < 10)
// false
//  untuk && harus keduanya true untuk bisa menghasilkan TRUE
//  jika hanya salah satu true maka hasilnya FALSE

x3 = 8
(x3 % 2 == 0) && (x3 < 10)
// true

// OR OPERATOR
x4 = 14
(x4 % 2 == 0) || (x4 < 10)
// true
// untuk || hanya diperlukan salah satu true untuk menghasilkan true

// NOT OPERATOR
x5 = 10
(x < 20)
// true
!(x < 20)
// false
// untuk ! adalah kebalikan 


// OPERATOR STRING +
var a = 'apple'
var b = "pen"
a + " " + b
// apple pen


10 + "10"
// "1010"
10 + 10 + "10"
// "2010"
"10" + 10 + 10
// "101010"

// TYPE OF (OPERAND)
typeof(10)
// "number"
typeof("20")
// string
typeof(true)
// boolean


// KONDISI OPERATOR
(kondisi) ? "benar" : "salah"
// Example

(x % 2 == 0) ? "genap" : "ganjil"
// jika hasil dari kondisinya TRUE maka hasilnya akan GENAP dan jika FALSE maka hasilnya GANJIL 



// **************************************************************
// WEB UNPAS  12 "STRING"---------------------------------------------------
// **************************************************************

// tipe data string dalam javascript digunakan untuk merepresentasikan DATA TEKSTUAL(non-spasial)? spasial adalah Sistem inform lokasi contoh lintang dan bujur
// atau PLAIN TEXT

// escape character = /
'"gerakan Pungut sampah" dilakukan pada hari juma'at';
// uncaught syntax error unexpected indentifier
""gerakan pungut sampah"dilakukan pada hari jum'at";
// uncaught syntax error unexpected indentifier
// solusinya adalah menggunakan escape character \" or \'
'"gerakan Pungut Sampah" dilaksanakan pada hari jum\'at'
// "gerakan Pungut Sampah" dilaksanakan pada hari jum'at
"\"gerakan Pungut Sampah\" dilaksanakan pada hari jum\'at"
// "gerakan Pungut Sampah" dilaksanakan pada hari jum'at

// ESCAPE CHARACTER
\0      = null
\'      = '
\"      = "
\\      = \
\n      = newline / garis baru
"ini adalah hari \n jum\'at" // menambah line baru
// ini adalah hari 
// jum'at

"ini adalah hari \n\n jum\'at" //karena \n 2 kali jadi ada sekat
// ini adalah hari 

// jum'at
// ______________________________________________________


\t      = tab 
"ini adalah hari \t jum\'at" //menambah tab jadi ada sekat antara kalimat
// ini adalah hari      jum'at

\b      = backspace 
\uXXXX  = unicode

\u00A9 
// logo copyright
'\u2122'
// logo THREADMARK

// KONTANTENSASI\
//  .length / jumlah / panjang karakter
var nama = "made indra"
nama.length
//10

// ******************************************************
// ******************************************************



// bollean adalah sebuah tipe data untuk merepresentasikan logika  true dan false
// biasanya digunakan pada PENGKODISIAN untuk menentukan aksi yang berbeda dan mengatur alur program

Boolean(10 < 20)
// true
Boolean("made indra")
// true
Boolean(0)
// false
Boolean(-1)
// True             KOK BISA????????????
// di dalam javascript itu menyimpan nilai-nilai TRUTHLY DAN FALSY menit: 5.42
// 


// ******************************************************
// web unpas 14 Variable -----------------------------------------------------------
// ******************************************************


// variable adalah tempat/wadah yang memiliki nama untuk menyimpan 

// *******DEKLARASI****** 
// mendaftarkan variable ke dalam lingkup yang sesuai

var i;  //artinya deklarasi & inisialisasi
// dll
var 
let
const
*********************************************
// var tidak boleh memakai spasi,
// tidak boleh diawali oleh angka
// bisa dipisah dengan __ dagang_baks $_$ atau dagang$bakso, dagangBakso(camel case)

__________________________________________________
// KATA YANG TIDAK BOLEH DI VARIABLE
// break case catch class const continue debugger default delete do else enum export extends false finally for function if implements import in instanceof interface let new null package private protected public return static super switch this throw true try typeof var void while with yield
__________________________________________________




// *******INISIALISASI**********
// menyediakan memori untuk variable

// **********ASSIGNMENT************
// menetapkan nilai yang spesifik ke dalam variable
i = 20;     //assignment


//SHORT HAND
var nama = "madeindra",
    umur = 17,
    lulus = true;

// ***********************************************
// Web unpas 17 control Flow
// ***********************************************

// normal flow yaitu apabila program memiliki lebih dari 1 statement akan dieksekusi dari atas ke bawah atau dari kiri ke kanan

// Pengulangan / loop / iteration
syntax: 
for 
while
do while    //example on belajar.js 

// Pengkondisian 
syntax :
if
if ... else
if ... else if ... else
switch


// web unpa 18 WHILE on belajar js****************************
// **
// **
// **
// **
// **
// **
// **

// web unpas 19 Tabel penelusuran
// hanya dijelaskan mengenai bagaimana cara kerja while

var jmlhAngkot = 10;
var noAngkot = 1;

while(noAngkot <= jmlhAngkot){
    console.log('Angkot No. ' + noAngkot + " beroperasi dengan baik")
    noAngkot++;
}
// hanya dijelaskan mengenai bagaimana cara kerja while


// web progamming unpas 20 FOR****************************

for(var nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal++){
    console.log('world')
}

// web progamming unpas 21 if else****************************
var angka = 3;
if(angka % 2 == 0) {
    alert(angka + 'adalah genap')
}else {
    alert(angka + 'bilangan ganjil')
}
// _____________________________
if(kondisi) {
    aksi 1
}else{
    aksi 2
}
// web progamming unpas 21 else if****************************

if(kondisi 1) {
    aksi 1
}else if(kondisi 2){
    aksi 2
}else[
    aksi 3
]



// web progamming unpas 24 SWITCH****************************
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