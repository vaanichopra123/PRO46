class Bullet{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height =40;
        //this.image = loadImage("./images/bullet.png");
    }

    display() {
        rect(this.x, this.y, this.width, this.height);
      }
}