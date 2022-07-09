const hamburger = document.querySelector('.hamburger');
const navAtas = document.querySelector('.nav-atas');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navAtas.classList.toggle('active');
})

document.querySelectorAll('a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navAtas.classList.remove('active');
}))

// AUDIO

function StartOrStop(audioFile) {
  var audie = document.getElementById("myAudio");
  if( audie.src == audioFile){ 
    audie.paused ? audie.play() : audie.pause();
 }else{
      audie.src = audioFile;
      audie.play()};

  // if (!audie.src || audie.src !== audioFile) audie.src = audioFile; 
  // if (audie.paused == false)
  //     audie.pause();
  // else
  //     audie.play();
}


document.getElementById('play2').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio2').play();
  });
document.getElementById('play3').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio3').play();
  });
document.getElementById('play4').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio4').play();
  });
document.getElementById('play5').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio5').play();
  });
// }
// const menuBtn =document.querySelector('.menu-btn');
// let menuOpen = false;
// menuBtn.addEventListener('click', () => {
//     if(!menuOpen){
//         menuBtn.classList.add('open');
//         menuOpen = true;
//     }else{
//         menuBtn.classList.remove('open');
//         menuOpen = false