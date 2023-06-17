const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillRect(0,0,width,height);

/* Simple rectangles */
ctx.fillStyle = "rgb(255, 0, 0)";
ctx.fillRect(50, 50, 100, 150);

ctx.fillStyle = "rgb(0, 255, 0)";
ctx.fillRect(75, 75, 100, 100);

/* draw semi-transparent graphics */
ctx.fillStyle = "rgba(255, 0, 255, 0.75)";
ctx.fillRect(25, 100, 175, 50);

/* Strokes and line widths */
ctx.strokeStyle = "rgb(255, 255, 255)";
ctx.lineWidth = 5; //the adjustments have to be before drawing the rectangle.
ctx.strokeRect(25, 25, 175, 200);