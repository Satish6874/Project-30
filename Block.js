class Block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.Visiblity = 255;
    }
    display(){
      if (this.body.speed < 5){
      var pos = this.body.position;
      fill(9,174,196);
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
      }
      else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 2;
      tint(255,this.Visiblity);
      pop();
      }
    }
  }