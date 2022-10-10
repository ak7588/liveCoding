// b&w
voronoi(10,1,5).brightness(()=>Math.random()*0.15)
  .modulatePixelate(noise(25,0.5),100)
  .out(o0) //   .blend(o0,0.0).out(o0)

// colored
voronoi(10,1,5).brightness(()=>Math.random()*0.15)
  .modulatePixelate(noise(25,()=>cc[0]),100)
  .color(()=>cc[0],2.5,3.4).contrast(1.4)
  .out(o0)

// score
voronoi(10,1,5).brightness(()=>Math.random()*0.15)
  .modulatePixelate(noise(()=>cc[2]*20,()=>cc[0]),100)
  .color(()=>cc[0],5,3.4).contrast(1.4)
  .add(shape(7),[cc[0],cc[1]*0.25,0.5,0.75,1])
  .out(o0)

// when dropping the beat
voronoi(10,1,5).brightness(()=>Math.random()*0.15)
  .modulatePixelate(noise(cc[0]+cc[1],0.5),100)
  .color(()=>cc[0],0.5,0.4).contrast(1.4)
  .out(o0)

// add visual

// when dropping the beat x2
voronoi(10,1,5).brightness(()=>Math.random()*0.15)
  .modulatePixelate(noise(cc[0]+cc[1],0.5),100)
  .color(()=>cc[0],0.5,0.4).contrast(1.4)
  .invert().brightness(0.01).contrast(-0.1)
  .modulateScale(osc(()=>cc[2]),-0.2)
  .out(o0)

  voronoi(10,1,5).brightness(()=>Math.random()*0.15)
    .modulatePixelate(noise(()=>cc[1],0.5),100)
    .color(()=>cc[0],0.5,0.4).contrast(1.4)
    .invert().brightness(0.01).contrast(-0.1)
    .out(o0)

  // score
  voronoi(10,1,5).brightness(()=>Math.random()*0.15)
    .modulatePixelate(noise(cc[0]+cc[1],0.5),100)
    .color(()=>cc[0],0.5,0.4).contrast(1.4)
    .invert().brightness(0.01).contrast(-0.1)
    .add(shape(7),[cc[0],cc[1]*0.25,0.5,0.75,1])
    .modulateScale(osc(()=>cc[2]),-0.2)
    .out(o0)

    voronoi(10,1,5).brightness(()=>Math.random()*0.15)
      .modulatePixelate(noise(cc[0]+cc[1],0.5),100)
      .color(()=>cc[0],0.5,0.4).contrast(1.4)
      .modulateScale(osc(()=>cc[2]),-0.2)
      .out(o0)

// calming down
  voronoi(10,1,5).brightness(()=>Math.random()*0.15)
    .modulatePixelate(noise(()=>cc[2]*20,()=>cc[0]),100)
    .invert().brightness(0.01).contrast(-1.1)
    .color(()=>cc[0],5,3.4).contrast(1.4)
    .out(o0)

  voronoi(10,1,5).brightness(()=>Math.random()*0.15)
    .modulatePixelate(noise(24,()=>cc[2]),100)
    .color(()=>cc[0],0.5,0.4).contrast(1.4)
    .invert().brightness(-1)
    .modulateScale(osc(()=>cc[1]+cc[3]),-0.2)
    .out(o0)

// reverse invert
voronoi(10,1,5).brightness(()=>Math.random()*c[1])
  .modulatePixelate(noise(24,()=>cc[0]+0.1),100)
  .color(()=>cc[0],0.5,0.4).contrast(1.4)
  .modulateScale(osc(2),-0.2)
  .out(o0)

// remove midi
voronoi(10,1,5).brightness(()=>Math.random()*0.15)
  .modulatePixelate(noise(24,0.5),100)
  .color(2,3,4).contrast(1.4)
  .modulateScale(osc(2),-0.2)
  .out(o0)

// decrease brightness
  voronoi(10,1,5).brightness(()=>Math.random()*c[1])
    .modulatePixelate(noise(24,()=>cc[0]),100)
    .color(2,3,4).contrast(1.4)
    .modulateScale(osc(2),-0.2)
    .out(o0)

// done
voronoi(10,1,5).brightness(()=>Math.random()*0.15)
  .modulatePixelate(noise(24,0.5),100)
  .modulateScale(osc(2),-0.2)
  .out(o0)

voronoi(10,1,5).brightness(()=>Math.random()*0.15)
  .modulatePixelate(osc(()=>cc[0]),-0.2)
  .modulateScale(osc(2),-0.2)
  .out(o0)

// danger zone
noise(25,()=>cc[0]).color(1,0.1,0.1).pixelate(()=>cc[1],20).out(o0)
noise(25,()=>cc[0]).color(1,0.1,0.1).pixelate(()=>cc[1],20).posterize( [0, 5, 15, 30] , 0.5 ).out(o0)
noise(25,()=>cc[0]).color(1,0.1,0.1).pixelate(30,30).out(o0)
noise(25,()=>cc[0]).color(1,0.1,0.1).pixelate(30,30).add(noise(25,()=>cc[0]).color(1,0.1,0.5).pixelate(()=>cc[1],20)).out(o0)
noise(25,()=>cc[0]).color(1,0.1,0.1).pixelate(30,30).add(noise(25,()=>cc[0]).color(1,0.1,0.5).pixelate(()=>cc[1],20)).posterize( [0, 5, 15, 30] , 0.5 ).out(o0)

hush()
