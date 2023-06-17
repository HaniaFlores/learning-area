const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillRect(0,0,width,height);

/* equilateral triangle */
/* converts degree values to radians, JS uses radians for angles */
function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
}
/* 
- Set a color for our triangle
- Start drawing a path
- Move the pen to (50, 50) without drawing anything
*/
ctx.fillStyle = "rgb(255, 0, 0)";
ctx.beginPath();
ctx.moveTo(50, 50);

/* 
- First, we draw a ñine across to (150, 50)
- Second, we work out the height of our equilateral triangle.
- Last of all, we run ctx.fill() to end the path and fill in the shape.
*/
ctx.lineTo(150, 50);
const triHeight = 50 * Math.tan(degToRad(60));
ctx.lineTo(100, 50 + triHeight);
ctx.lineTo(50, 50);
ctx.fill();

/* Drawing circles */
ctx.fillStyle = "rgb(0, 0, 255)";
ctx.beginPath();
ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
ctx.fill();

ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
ctx.lineTo(200, 106);
ctx.fill();
