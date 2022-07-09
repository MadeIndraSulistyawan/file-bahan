// DOM Selection method
document.getElementById('disini adalah id')
// hanya boleh dipakai khusus 1x
// returnnya adalah element
document.getElementsByTagName('disini adalah element')
// returnnya adalah HTML colection
// berupa arrays
document.getElementsByClassName('disini adalah nama class/ lbh dri 1')
// returnnya adalah HTML colection
// berupa arrays
document.querySelector('disini adalah selector css/ bisa digunakan untuk spesifik pada html')
// returnnya adalah elemet
document.querySelectorAll('semua element yang memiliki selectior yang sama akan terpengaruh')
// returnnya adalah Node List


// example
const judul = document.getElementById('judul')

// 2
const p = document.getElementsByTagName('p')
p[2].style.backgroundColor = 'lightblue'
// [] digunakan untuk memilih spesifik element,,, untuk urutan arrays bisa dilihat di console.log dan length

// untuk mengubah semua element pada tagName adalah dengan menggunakan looping
for(let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'blue'; 
}

// 4
// bisa digunakan untuk menangkap element tanpa merubah element html
const p4 = document.querySelector('#b p')
// yang di tangkap adalah element pertama yang ditemukan dari atas 
const li2 = document.querySelector('section#b ul li:nth-child(2)');

// 5
const p = document.querySelectorAll('p')
p[2].style.color = 'blue'




// DOM MANUPULATION ELEMENT
//element.methodn('')
p4.innerHTML
p4.style
// atribute
// bisa menambhakan atribut seperti id class name
p4.setAttribute('type', 'value')//menambahkan atau jika sudah ada akan mengganti valuenya
p4.getAttribute('id')//untuk menanyakan value pada console, apakah ada atau tidak 
p4.removeAttribute//menghilangkan atribute

// atribute
p4.classList
//.add untuk menambahkan tanpa menggantikan 
//.remove untuk menghapus
//.toggle jika dalam class itu belum ada maka akan ditambahkan jika tidak ada akan ditambahkan
//.item.contains