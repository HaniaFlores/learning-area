const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillRect(0,0,width,height);

/* moves the origin point of the canvas */
ctx.translate(width/2, height/2);

/* converts degrees to radians */
function degToRad(degrees) {
  return degrees * Math.PI / 180;
};

/* returns a random number between given lower and upper bounds */
function rand(min, max) {
  return Math.floor(Math.random() * (max-min+1)) + (min);
}

let length = 250;
let moveOffset = 20;

/* we'll draw something on the canvas inside the for loop,
and iterate on it each time */
for (let i = 0; i < length; i++) {
  ctx.fillStyle = `rgba(${255-length},0,${255-length},0.9)`;
  ctx.beginPath();
  ctx.moveTo(moveOffset,moveOffset);
  ctx.lineTo(moveOffset+length,moveOffset);
  const triHeight = length/2 * Math.tan(degToRad(60));
  ctx.lineTo(moveOffset+(length/2),moveOffset+triHeight);
  ctx.lineTo(moveOffset,moveOffset);
  ctx.fill();

  length--;
  moveOffset+=0.7;
  ctx.rotate(degToRad(5));
}
