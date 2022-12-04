oronoi(10,1,4).color(()=>cc[0]*3+1).modulate(noise(()=>cc[0]*10,()=>cc[1])).out()
hush()

render(o0)


///////////////////////////////////////////////////////////////

render(o0)

render()
src(o0).mult(noise(()=>cc[3], 5)).out(o2)

// i like this
shape(100, 0.5).mult(o0).modulate(noise(()=>cc[0]*20))
  .repeat(()=>cc[0]*5+2, ()=>cc[0]*5+2).out(o2)



render(o1)



voronoi(1,0.1).modulate(noise(2)).color(50,10)
  .colorama(1).posterize(2).diff(solid(1,1,1)).out()

voronoi(1,1).modulateScrollX(noise(2)).modulateKaleid(osc(5)).out(o3)

hush()


// Blooby meets Xavier

// dania i am here

shape(2,0.05).rotate(()=>time).modulateScrollY(noise(1),0.5)
  .blend(o0, 0.3).mult(osc(10,()=>cc[0],1)).invert(1.5)  
.blend(shape(40).modulate(noise(2,1))
   .modulateScale(o0).repeat(4,2).colorama(10,20).out()
       
shape(2,0.05).modulateScrollY(noise(2), 0.5)
   .blend(o0, 0.3).mult(osc(10,()=>cc[0],1).brightness(() => Math.sin(time)))
 .blend(shape(40).modulate(noise(2,1))
        .modulateScale(o0).repeat(4,2).colorama(10,20).brightness(() => Math.sin(time))).contrast().out()

////////amina likey

shape(()=>cc[0]*5+2).modulate(noise(2))
  .add(solid(0.2,0.4,2).modulate(noise(1)).diff(solid(1,1,1)).modulateRepeat(osc(0.2)))
  .posterize(4).modulateRepeat(shape(()=>cc[0]*20)).out(03)

render(o0)

render()

hush()
cc[0]= 1
cc[1] =1
cc[2]=0
ccActual[3] =0

////I AM HEREEEEEEE
shape(2, 0.001, 0.05).modulateScrollY(noise(()=> cc[0]*4,0.1).scale(()=>cc[1],1,5))
  .blend(o0, 0.3).mult(osc(10, 0.8, 1)
  .color(3.5, 3.0, 3.0)).blend(o0)
  //.modulateRotate(voronoi(50,1))
  //.diff(solid(()=>ccActual[3],()=>ccActual[3],()=>ccActual[3]))
  .invert(()=>ccActual[3])
  .blend(o0).posterize(5)
  .out()


///thais i am here
/////////////.modulateKaleid(noise(()=>cc[2]*2))

shape(2, 0.001, 0.05)
  .modulateScrollY(voronoi(10,1),0.5))
  .blend(o0, 0.3).mult(osc(10, 0.8, 1)
  .color(3.5, 3.0, 3.0)).blend(o0).out()


//THAÍS I AM HERE

/// Many weird voronoi circles
shape(2, 0.001, 0.05)
  .modulateScrollY(voronoi(500,1,2),0.5).scale(100).brightness(0.001)
  .blend(o0, 0.3).mult(osc(10, 0.8, 1)
  .color(3.5, 3.0, 3.0)).blend(o0).out()


src(o0).scale(1.01).out(o0)

render(o0)
solid(1,1,1).diff(src(o0)).out(o2)


hush()




//////wavey colours
shape(2).modulateScrollY(noise(0.3,0.2))
  .color(Math.random(),Math.random(),Math.random())
  .scale(()=>cc[0]*1.5).diff(osc(3,0.5,7).thresh()
  .modulate(noise(2)).mult(solid(Math.random(),Math.random(),Math.random())))
  .modulate(osc(10)).modulateKaleid(noise(()=>cc[2]*2))
  .modulateScale(osc(1)).out(o1)

shape(5,.5,.5).modulate(noise(3,.1),.5).color(1,.3,.4)
  .mult(osc(10,.1,()=>cc[1]+0.4*2)).rotate(1,-.1).colorama()
  .diff(solid(1,.9,.531)).posterize(15).kaleid(()=> cc[0]*5)
  .blend(o1,0).out(o2)

src(o1).modulateRepeat(noise(3)).modulateScale(o0)
  .blend(o0).blend(o0).blend(o0).blend(o0).out(o2)

// zam 
shape(2).modulateScrollY(noise(0.3,0.7))
  .color(Math.random(),Math.random(),Math.random())
  .scale(()=>cc[0]*0.5+0.1).diff(src(o0).rotate(1,-1)).out(o2)

render(o0)

shape(4,.6,.3).color(80,5,20).modulateRepeat(osc(10))
  .modulate(noise(()=>cc[0]*3)).posterize(15).pixelate(200,200).out(o2)

///i like colour pallletetetet 
osc(.7,1,0.9).blend(shape(()=>cc[0]*5,0.2,.5).mask(osc())
    .rotate(1,-1),0.4)
  .color(1,.3,.4).colorama(.4).posterize(2).diff(solid(1,1,1)).rotate(0.1,-.01)
  .modulate(osc()).out(o2)


hush()


//blobby is not blobbing 

shape(90,()=>cc[0]*0.2).modulate(noise(()=>cc[0]))
  .mult(osc(10,0.11, 0.2)
        .modulate(noise(4)).color(1,.3,.4).posterize(2)
        .diff(solid(1,1,1)))
  .modulateRepeat(osc(1,0.6),()=>cc[2], ()=>cc[2]).scale(0.8)
  .out()

shape(100,0.2,0.5).modulate(noise(2)).repeat(()=>cc[0]*2+2, ()=>cc[0]*2+2)
  .color(10,40,6).out(o2)

//twinkle twinkle little start
cc[0]=0
cc[1]=0
cc[2]=0
cc[3]=0
cc[4]=0

voronoi(()=>cc[0]*20, ()=>cc[2]*0.2,10).color(()=>cc[4]*2,()=>cc[4]*4,2)
  .modulate(noise(()=>cc[1]*2))
  .modulateRotate(noise(()=>cc[3]*2)).modulateKaleid(o0)
  .modulateScrollX(noise())
  .out()

render()





///////////////////////////////////////////////////////////////

render(o0)


src(o0).mult(noise(()=>cc[3], 5)).out(o2)

// i like this
shape(100, 0.5).mult(o0).modulate(noise(()=>cc[0]*20))
  .repeat(()=>cc[0]*5+2, ()=>cc[0]*5+2).out(o2)


render(o1)


voronoi(1,0.1).modulate(noise(2)).color(50,10)
  .colorama(1).posterize(2).diff(solid(1,1,1)).out()

voronoi(1,1).modulateScrollX(noise(2)).modulateKaleid(osc(5)).out(o3)

hush()

////////amina likey

shape(()=>cc[0]*5+2).modulate(noise(2))
  .add(solid(0.2,0.4,2).modulate(noise(1)).diff(solid(1,1,1)).modulateRepeat(osc(0.2)))
  .posterize(4).modulateRepeat(shape(()=>cc[0]*20)).out(03)

render(o0)

render()

hush()

cc[0]= 1
cc[1] =1
cc[2]=0
ccActual[3] =0

////I AM HEREEEEEEE
shape(2, 0.001, 0.05).modulateScrollY(noise(()=> cc[0]*4,0.5).scale(1,1,5))
  .blend(o0, 0.3)
  .mult(osc(10, 0.8, 1)
  .color(3.5, 3.0, 3.0)).blend(o0).modulate(noise(()=>cc[1]))
  //.modulateRotate(voronoi(50,1))
  //.diff(solid(()=>ccActual[3],()=>ccActual[3],()=>ccActual[3]))
  .invert(()=>ccActual[3]).contrast(2)
  .blend(o0)
  .modulateKaleid(noise(()=>cc[2]*2))
  .out()


render(o0)
hush()

shape(2, 0.001, 0.05).modulateScrollY(noise(()=> cc[0]*4,0.5).scale(()=>cc[1],1,5))
  .blend(o0, 0.3).mult(osc(10, 0.8, 1)
  .color(3.5, 3.0, 3.0)).blend(o0).out()
/////////////.modulateKaleid(noise(()=>cc[2]*2))

shape(2, 0.001, 0.05)
  .modulateScrollY(noise(()=> cc[0]*4,0.5).scale(0.2,1,5))
  .blend(o0, 0.3).mult(osc(10, 0.8, 1)
  .color(3.5, 3.0, 3.0)).blend(o0).out()

src(o0).scale(1.01).out(o0)

render(o0)
solid(1,1,1).diff(src(o0)).out(o2)




//////wavey colours
shape(2).modulateScrollY(noise(0.3,0.2))
  .color(Math.random(),Math.random(),Math.random())
  .scale(()=>cc[0]*1.5).diff(osc(3,0.5,7).thresh()
  .modulate(noise(2)).mult(solid(Math.random(),Math.random(),Math.random())))
  .modulate(osc(10)).modulateKaleid(noise(()=>cc[2]*2))
  .modulateScale(osc(1)).out(o1)

shape(5,.5,.5).modulate(noise(3,.1),.5).color(1,.3,.4)
  .mult(osc(10,.1,()=>cc[1]+0.4*2)).rotate(1,-.1).colorama()
  .diff(solid(1,.9,.531)).posterize(15).kaleid(()=> cc[0]*5)
  .blend(o1,0).out(o2)

src(o1).modulateRepeat(noise(3)).modulateScale(o0)
  .blend(o0).blend(o0).blend(o0).blend(o0).out(o2)

// zam 
shape(2).modulateScrollY(noise(0.3,0.7))
  .color(Math.random(),Math.random(),Math.random())
  .scale(()=>cc[0]*0.5+0.1).diff(src(o0).rotate(1,-1)).out(o2)

render(o0)

shape(4,.6,.3).color(80,5,20).modulateRepeat(osc(10))
  .modulate(noise(()=>cc[0]*3)).posterize(15).pixelate(200,200).out(o2)

///i like colour pallletetetet 
osc(.7,1,0.9).blend(shape(()=>cc[0]*5,0.2,.5).mask(osc())
    .rotate(1,-1),0.4)
  .color(1,.3,.4).colorama(.4).posterize(2).diff(solid(1,1,1)).rotate(0.1,-.01)
  .modulate(osc()).out(o2)


hush()


//blobby is not blobbing 

shape(90,()=>cc[0]*0.2).modulate(noise(()=>cc[0]))
  .mult(osc(10,0.11, 0.2)
        .modulate(noise(4)).color(1,.3,.4).posterize(2)
        .diff(solid(1,1,1)))
  .modulateRepeat(osc(1,0.6),()=>cc[2], ()=>cc[2]).scale(0.8)
  .out()

shape(100,0.2,0.5).modulate(noise(2)).repeat(()=>cc[0]*2+2, ()=>cc[0]*2+2)
  .color(10,40,6).out(o2)

//twinkle twinkle little start
cc[0]=0
cc[1]=0
cc[2]=0
cc[3]=0
cc[4]=0

shape(40,()=>cc[2]).modulate(noise(2)).mult(voronoi(()=>cc[0]*20, 0,10).color(()=>cc[4]*2,()=>cc[4]*4,2)
  .modulate(noise(()=>cc[1]*2)))
  //.modulateScrollX(noise())
  .out()



shape(40,()=>cc[2]).modulate(noise(2)).invert().mult(voronoi(()=>cc[0]*20, 0,10).color(()=>cc[4]*2,()=>cc[4]*4,2)
  .modulate(noise(()=>cc[1]*2))).repeat(()=>cc[3]*0.5)
  .modulateScrollX(noise(1))
  .out()

src(o0).modulate(noise(()=>cc[2]*5)).blend(o1, 0.6).blend(o1).out(o1)
render(o1)


/////////////////////////////////Dania's thing///////////////////////


p5.remove()


//initialise
p5 = new P5();
s0.init({src: p5.canvas})
p5.hide()

//var
ripples = [];
//class
class Ripple {
  constructor(x, y) {
    this.x = x; // x cooordinate
    this.y = y; // y coordinate
    this.r = p5.random(50, 100); // r is radius
    this.expSpeed = p5.random(3, 5); //expanding speed
    this.opacity = 300;
  }
  display() {
    p5.noFill();
    p5.strokeWeight(15);
    p5.stroke(180, this.opacity);
    p5.ellipse(this.x, this.y, this.r);
    this.r += this.expSpeed;
    this.opacity -= 5;
  }
}
p5.draw = ()=>{
  p5.background(0, 0, 0);
  for (i = 0; i < ripples.length; i++) {
    ripples[i].display();
  }
  // adds new ripples
  if (cc[0]) {
    cc[0] = 0;
    ripples.push(new Ripple(p5.random(0, p5.width), p5.random(0, p5.height)));
  }
  //removes old ripples from the array
  for( j = 0; j< ripples.length; j++){
    if (ripples[j].opacity == 0)
    {
      ripples.splice(j,1);
    }
  }
}
src(s0).out()

hush()

src(o0).modulate(noise(()=>cc[2]*5)).mult(osc(10,0.01,1)).blend(o1, 0.6).blend(o1).out(o1)

src(o0).modulate(noise(()=>time*5)).mult(osc(10,0.01,1)).blend(o1, 0.6).blend(o1).out(o1)

render(o1)

render()

osc().out()

hush()

solid().out()
///////////////////////end of dania's thing/////////////////////////// 

// --------------------- Thais Water Dripple ---------------------- //

osc(10,-0.25,0.7).posterize(1.5).brightness(0.5).luma(0.5).contrast(3)
    .kaleid(50)
    .modulateScale(
      osc(6,-0.5,()=>cc[2])
      .kaleid(50)
    )
    .scale(()=>cc[2],0.5,0.75)
    .out()


// NICE Visual
voronoi(10).mult(osc(10,0.5,1)).rotate(()=>time).modulate(noise(10)).modulateKaleid(osc(11,0.5,0),10).luma(0.5)
  _.saturate(2).contrast(1.2).out()

voronoi(10).mult(osc(10,0.5,1)).rotate(()=>time).modulate(noise(10)).modulateKaleid(osc(1,0.5,0),10).luma(0.5).saturate(2).contrast(1.2).out()

voronoi(10).mult(osc(10,0.5,1)).rotate(()=>time).modulate(noise(10)).luma(0.5).saturate(2).contrast(1.2).out()
render(o1)

render()




//////////// blobby's new beginning 

// interesting
shape(40).modulate(noise(2,1)).modulateScale(o0).repeat(4,2).out()
