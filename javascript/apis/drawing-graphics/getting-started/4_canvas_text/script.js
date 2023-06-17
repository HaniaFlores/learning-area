const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillRect(0,0,width,height);

/* we create a new HTMLImageElement object using the Image() constructor. */
const image = new Image();
image.src = "firefox.png";

/* embed the image using drawImage(), but 
we make sure the image file has been loaded first. */
`image.addEventListener("load", () =>
    ctx.drawImage(image, 20, 20));`

/* if we want to display only a part of the image,
 or to resize it */
image.addEventListener("load", () =>
ctx.drawImage(image, 20, 20, 185, 175, 50, 50, 185, 175));

canvas.setAttribute("aria-label", "Firefox Logo");