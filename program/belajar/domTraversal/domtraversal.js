//Cara Basic
//hanya bisa dilakukan jika hanya ada satu element

//query selector hanya menangkap 1 elemnt yang pertama

function Basic(){

    // const close = document.querySelector('.close');
    // const card = document.querySelector('.card');
    
    // close.addEventListener('click', function(){
        //     card.style.display = 'none'
        // })        
    }
    
    
    //DOM TRAVERSAL***************************************
    
// dom traversal tapi tidak benar
const closer = document.querySelectorAll('.close');

for(i = 0; i < close.length; i++){
    closer[i].addEventListener('click', function(){
        closer[i].parentElement.display = 'none'
    })
}




const close = document.querySelectorAll('.close');


//cara yang baik

for(i = 0; i < close.length; i++){
    // jika kita menambahkan parameter pada funtion(biasanya event(e))
    close[i].addEventListener('click', function(e){
    // maka e akan menjadi object yang berisi infomasi
    console(e)
    //expect *banyak informasi
    console.log(e.target)
    //expect target/ element yang diclick
    e.target.parentElement.style.display = 'none'
    })
}

//cara yang praktis dan benar untuk dom traversal******************* 


//el untuk mengambil 1 element
close.forEach(function(el){
    el.addEventListener('click', function(e){
        e.target.parentElement.style.display = 'none'
    })
})