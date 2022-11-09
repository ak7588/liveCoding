p5 = new P5()
s0.init({src: p5.canvas})
src(s0).out()
p5.hide();

p5.createCanvas(600, 600);
p5.colorMode(p5.HSB, 360, 100, 100, 100);
p5.noStroke();
p5.fill(192, 100, 64, 60);

p5.draw = ()=>{
  p5.clear();
  p5.background(0);
  p5.ellipse();
}
render(o0)

src(o0).voronoi(10,1,5).brightness(()=>Math.random()*0.15)
  .modulatePixelate(noise(25, ()=> cc[0] ),100)
  .color(()=>cc[0], 2.5, 3.4).contrast(1.4)
  .out(o2)

noise(0.1).add(osc(1,2,5)
  .modulateScale(osc(5)), [-1,1]
  .smooth().fast(0.5),.5)
  .color(3.5, 3.0, 3.0)
  .scale(0.05)
  .blend(o0, 0.7)
  .brightness(-0.5)
  .out()

voronoi(10,1,5).brightness().out(o1)
shape(2).mult(o3)
  .color(1,5,10)
  .blend(o2,0.9)
  .modulateScrollY(noise(1)).scale(2).out(o2)

src(o2).add(voronoi(1000,1,2).color(4).pixelate(100)).out(o2)

noise(0.1).add(osc(1,2,5)
  .modulateScale(osc(5)), [-1,1].smooth()
  .fast(0.5),.5).color(3.5, 3.0, 3.0)
  .modulateScale(o3).out(o3)

render()

////really nice!!!!!
voronoi(10,1,5).brightness(()=>Math.random()*0.15)
  .modulatePixelate(noise(0.5,0.5),100)
  .color(10,0.5,10.4).contrast(-0.5)
  .out(o3)

osc().mask(shape(3)).kaleid(3).scale(0.5).modulateKaleid(noise(1)).colorama(0).out(o1)
gradient(1,()=>cc[0]).mask(o1)out(o3)


shape(2).mask(noise(10,0.1)).color(1,0,0)
  .invert(1)
  .rotate(()=>6+Math.sin(time)*0.5)
  .modulatePixelate(voronoi(10,10),100).out(o1)

src(o2)
  .mask(shape(2)
  .rotate(()=>time))
  .modulateScrollY(noise(()=>cc[0])).colorama(()=>cc[0]*0.1).out(o0)


render()

solid(1).out(o2)

hush()
