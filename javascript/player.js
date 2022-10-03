class Player{

    constructor(){
        // PROPIEDADES DEL JUGADOR
        this.img = new Image()
        this.img.src = "./images/player.png"
        this.x = 50;
        this.y = 50;
        this.w = 70;
        this.h = 95;
        this.speed = 2
        this.jumpSpeed = 30
    }

    // MÉTODOS O ACCIONES DEL JUGADOR

    drawPlayer = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w,this.h)
    }

    gravityPlayer = () => {
        this.y = this.y + this.speed
    }

    jumpPlayer = () => {
        this.y = this.y - this.jumpSpeed
    }
}