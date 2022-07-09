// contoh else if web unpas 22********************************

var angka = prompt('masukan angka')

if(angka % 2 == 0){
    alert(angka + ' adalah genap')
}else if(angka % 2 == 1){
    alert(angka + ' adalah ganjil')
}else{
    alert('itu bukan angka')
}



// kegunaaan parseInt adalah untuk merubah semuanya menjadi Int atau integer
var angka = parseInt(prompt('masukan angka'))

if(angka % 2 === 0){
    alert(angka + ' adalah genap')
}else if(angka % 2 === 1){
    alert(angka + ' adalah ganjil')
}else{
    alert('itu bukan angka')
}
