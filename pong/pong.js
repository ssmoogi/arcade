// pong script.js
// heavily references https://gist.github.com/straker/81b59eecf70da93af396f963596dfdc5

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');
const grid = 15;
const paddleHeight = grid * 5;
const maxPaddleY = canvas.height - grid - paddleHeight;

var paddleSpeed = 6;
var ballSpeed = 5;

const leftPaddle = {
    x: grid * 2,
    y: canvas.height / 2 - paddleHeight / 2,
    width: grid,
    height: paddleHeight,
    dy: 0
};

const rightPaddle = {
    x: canvas.width - grid * 3,
    y: canvas.height / 2 - paddleHeight / 2,
    width: grid,
    height: paddleHeight,
    dy: 0
};

const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: grid,
    height: grid,
    resetting: false,
    dx: ballSpeed,
    dy: -ballSpeed
}

function collides() {

}

function loop() {
    requestAnimationFrame(loop);
    context.clearRect(0,0,canvas.width,canvas.height);
}