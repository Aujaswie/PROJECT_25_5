class dustbin {
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':3,
            'density':1.0,
            isStatic: true
        }
        //this.body = Bodies.rectangle(x, y, width, height, options);
        this.dusbinWidth = width;
        this.dusbinHeight = height;
        this.wallThickness=20;
        this.x = x;
        this.y = y;
        this.image = loadImage("dustbingreen.png");

        this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true}) 
        this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true}) 
        this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
        
        //World.add(world, this.body);
        World.add(world, this.bottomBody);
        World.add(world, this.leftWallBody);
        World.add(world, this.rightWallBody);
      
        
        
      }
      display(){
        var pos =this.bottomBody.position;
        //var angle = this.body.angle;
        push();
        //translate(pos.x,pos.y);
        //rotate(angle);
        imageMode(CENTER);
        //fill("cyan");
        image (this.image,pos.x,pos.y,this.dustbinWidth,this.dustbinHeight);
        pop();
      }
  };
 