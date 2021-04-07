let canvas = document.getElementById("snake"); //criar elemento que irá rodar o jogo
let context = canvas.getContext("2d"); //....
let box = 2;
let snake = []; //criar cobrinha como lista, já que ela vai ser uma série de coordenadas, que quando pintadas, criam os quadradinhos
snake[0] ={
    x: 75 * box,
    y: 35 * box
}
let direction = "right";
function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 150*box, 75*box); //desenha o retângulo usando x e y e a largura e altura setadas
}

function criarCobrinha (){
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, 5*box, 5*box);
    }
}


function iniciarJogo(){    

    // if(snake[0].x > 15*box && direction == "right") snake[0].x = 0;
    // if(snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
    // if(snake[0].y > 15*box && direction == "down") snake[0].y = 0;
    // if(snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;
    
    // for(i = 1; i < snake.length; i++){
    //     if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
    //         clearInterval(jogo);
    //         alert('Game Over :(');
    //     }
    // }

    criarBG();
    criarCobrinha();
    // drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += 5*box;
    if(direction == "left") snakeX -= 5*box;
    if (direction == "up") snakeY -= 5*box;
    if(direction == "down") snakeY += 5*box;

    snake.pop();

    // if(snakeX != food.x || snakeY != food.y){
    //     snake.pop(); //pop tira o último elemento da lista
    // }else{
    //     food.x = Math.floor(Math.random() * 15 +1) * box;
    //     food.y = Math.floor(Math.random() * 15 +1) * box;
    // }
    
    let newHead ={
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead); //método unshift adiciona como primeiro quadradinho da cobrinha
}


let jogo = setInterval(iniciarJogo, 100);
