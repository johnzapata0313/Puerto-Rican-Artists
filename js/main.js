document.getElementById('BadBunny').onclick = badBunny
document.getElementById('RauwAlejandro').onclick = rauwAlejandro
document.getElementById('EladioCarrion').onclick = eladioCarrion
document.getElementById('DeiV').onclick = deiV
document.getElementById('MykeTowers').onclick = mykeTowers

let BadBunny = new Audio('audio/Bad Bunny - Moscow Mule (La Letra  Lyrics).mp3');
let RauwAlejandro = new Audio('audio/Rauw Alejandro - DILUVIO.mp3');
let EladioCarrion = new Audio('audio/Eladio Carrión - Mbappé (LetraLyrics).mp3');
let DeiV = new Audio('audio/Chris Jedi, Gaby Music, Dei V - PERREO LENTO (Visualizer).mp3');
let MykeTowers = new Audio('audio/Girl (Myke Towers).mp3');

function badBunny() {
  document.body.style.backgroundImage = "url('https://www.billboard.com/wp-content/uploads/2025/07/26-Night-3-Bad-Bunny-PR-Residency-pr-credit-Cheery-Viruet-006-2025-billboard-1548.jpg?w=875&h=583&crop=1')"
  document.body.style.backgroundRepeat = 'no-repeat'
  document.body.style.backgroundSize = 'cover'
  document.body.style.color = 'white'
  BadBunny.play();
  RauwAlejandro.pause();
  EladioCarrion.pause();
  DeiV.pause();
  MykeTowers.pause();
}
function rauwAlejandro() {
  document.body.style.backgroundImage = "url('https://www.rollingstone.com/wp-content/uploads/2024/11/GettyImages-2185044622.jpg?w=1581&h=1054&crop=1')"
  document.body.style.backgroundRepeat = 'no-repeat'
  document.body.style.backgroundSize = 'cover'
  document.body.style.color = 'white'
  BadBunny.pause();
  RauwAlejandro.play();
  EladioCarrion.pause();
  DeiV.pause();
  MykeTowers.pause();
}
function eladioCarrion() {
  document.body.style.backgroundImage = "url('https://worldredeye.com/wp-content/uploads/2025/04/11/0-eladio-carrion-performing802_new.jpg')"
  document.body.style.backgroundRepeat = 'no-repeat'
  document.body.style.backgroundSize = 'cover'
  document.body.style.color = 'white'
  BadBunny.pause();
  RauwAlejandro.pause();
  EladioCarrion.play();
  DeiV.pause();
  MykeTowers.pause();
}
function deiV() {
  document.body.style.backgroundImage = "url('https://worldredeye.com/wp-content/uploads/2024/02/20/6-dei-v-anuel-performing41_new.jpg')"
  document.body.style.backgroundRepeat = 'no-repeat'
  document.body.style.backgroundSize = 'cover'
  document.body.style.color = 'white'
  BadBunny.pause();
  RauwAlejandro.pause();
  EladioCarrion.pause();
  DeiV.play();
  MykeTowers.pause();
}
function mykeTowers() {
  document.body.style.backgroundImage = "url('https://worldredeye.com/wp-content/uploads/2023/05/23/7-myke-towers-performing12.jpg')"
  document.body.style.backgroundRepeat = 'no-repeat'
  document.body.style.backgroundSize = 'cover'
  document.body.style.color = 'white'
 BadBunny.pause();
  RauwAlejandro.pause();
  EladioCarrion.pause();
  DeiV.pause();
  MykeTowers.play();
}

