
//8. Write a class Cuboid that contains height, width and length as properties. It should also contain surfaceArea and volume as methods. 
//After making the Cuboid class extend it into a new Cube class
//If you don’t remember the formulas, use this as reference - https://www.onlinemathlearning.com/volume-formula.html



class Cuboid{
    constructor(width, height,length) {
        this.width=width;
        this.length=length;
        this.height=height;
       
    
}

//method
volume(){
    return this.width*this.length*this.height;
}
    
surfaceArea(){
return 2*(this.width*this.length)+ 2*(this.width*this.height)+2*(this.length*this.height);
}
   
    class Cube extends Cuboid {
        constructor(side){
            super(side,side,side);//calling the parent constructor
        }
    }
 
    let cuboid1 = new Cuboid(10,30,40);
    console.log(cuboid1.surfaceArea());
    
    
    let cube1=new Cube(10);
    console.log(cube1.volume());
    console.log(cube1.surfaceArea());
