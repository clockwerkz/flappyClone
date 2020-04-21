const cvs = document.getElementById("canvas");
const ctx = cvs.getContext('2d');


let bg = new Image();
let fg = new Image();
let bird = new Image();
let pipeNorth = new Image();
let pipeSouth = new Image();

bg.src = "images/bg.png";
fg.src = "images/fg.png";
bird.src = "images/bird.png";
pipeNorth.src = "images/pipeNorth.png";
pipeSouth.src = "images/pipeSouth.png";

let gap = 75;
let constant = pipeNorth.height + gap;
let pipe = [];
let px = 180;
let py = -20;
let bx = 30;
let by = 300;
let gravity = 1.5;
let score = 0;
pipe[0] = {
    x:cvs.width,
    y:0
}

document.addEventListener("keydown", (e)=> {

    if (e.keyCode === 32) {
        by-=25 ; 
    }
})

ctx.drawImage(bg,0,0);
function draw() {
    ctx.drawImage(bg, 0, 0);
    
    for (let i=0; i<pipe.length; i++) {
        ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeSouth, pipe[i].x, pipe[i].y+constant);
        pipe[i].x--;
        if (pipe[i].x === cvs.width / 2) {
            pipe.push( {
                x:cvs.width,
                y:Math.floor(Math.random() * pipeNorth.height) - pipeNorth.height
            });
        }
        if (bx + bird.width >= pipe[i].x && bx <= pipe[i].x + pipeNorth.width && 
            (by <= pipe[i].y + pipeNorth.height || by+bird.height >= pipe[i].y+constant) 
            || by + bird.height >= cvs.height - fg.height) {
            location.reload();
        }
        if (pipe[i].x === 5) {
            score++;
        }
    }
    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird, bx, by);

    by+=gravity;
    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("Score : "+score, 10, cvs.height - 20);
    requestAnimationFrame(draw);
}

draw();
