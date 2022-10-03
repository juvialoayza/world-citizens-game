class Game {
    constructor() {

        //PROPIEDADES O ELEMENTOS DEL JUEGO

        //fondo del nivel
        this.stage = new Image();
        this.stage.src = "./images/stage-peru-pix.png";

        // player
        this.playerObj = new Player();

        // obstáculo
        this.obstacle = [];

        // reward
        this.reward = [];

        this.frames = 0;
        this.isGameOn = true;

        this.score = 0;
    }

    // MÉTODOS O ACCIONES DEL JUEGO


    // colisión del jugador con los obstáculos
    // playerCollisionObstacles = () => {
    //     this.obstacle.forEach((eachObstacle) => {
    //         if (
    //             // this.polloObj.x < eachTubo.x + eachTubo.w &&
    //             // this.polloObj.x + this.polloObj.w > eachTubo.x &&
    //             // this.polloObj.y < eachTubo.y + eachTubo.h &&
    //             // this.polloObj.h + this.polloObj.y > eachTubo.y
    //         ) {
    //             this.gameOver()
    //         }
    //     });
    // };

    // termina el juego
    gameOver = () => {
        this.isGameOn = false;
        canvas.style.display = "none";

        gameOverScreen.style.display = "flex"
    }

    // puntuación 
    // gameScore = () => {
    //     if(this.obstacle.length !==0 && this.obstacle[0]. x<-50){
    //         this.score++

    //         this.reward.shift()
    //         this.obstacle.shift()
    //     }
    // }

    //agregar obstáculos y rewards
    addReward = () => {
        if(this.frames % 120 === 0) {
            let randomNum = Math.random()* -150;
            let randomYint = Math.floor(randomNum);

            let nuevoReward = new this.reward(randomYint, "arriba");
            this.reward.push(nuevoReward);
        }
   }

   // agregar fondo
   drawStage = () => {
    ctx.drawImage(this.stage, 0, 0, canvas.width, canvas.height);
   }

   // dibujar puntuación
   drawScore = () => {
    ctx.font="20px Mochiy Pop One, sans-serif";
    let scoreStr = `Score: ${this.score}`
    ctx.fillText(this.score, canvas.width*0.4, 50)
   }

    // RECURSIÓN
    gameLoop = () => {
        this.frames = this.frames + 1;

        //1. limpiar el canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);


        //2. dibujado de los elementos
        this.drawStage();
        this.playerObj.drawPlayer();

        //3. acciones y movimientos
        this.playerObj.gravityPlayer();


        //4. control de la recursion
        if(this.isGameOn===true){
            requestAnimationFrame(this.gameLoop)
        }
    }

}