const canvas = document.querySelector(".myCanvas");
/* now we have a canvas that fills the entire width and height of the browser window! */
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

/* special reference to the drawing area called a context.
takes a single string as a parameter representing the type of context you want to retrieve. */
const ctx = canvas.getContext("2d");

/* color the canvas background */
ctx.fillStyle = "rgb(0, 0, 0)";
ctx.fillRect(0, 0, width, height);