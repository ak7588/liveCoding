osc(50,0.1,()=>cc[0]).modulate(noise(()=>cc[0]*5)).mult(shape(()=>cc[0]*4+3)).scale(2).out()

src(o2)
  .modulate(
    osc(6,0,1.5).modulate(noise(3),1).brightness(-0.5)
  ,0.003)
  .layer(o2).out()

osc(24,0.01,.7).mult(shape(3).scale(1,()=>window.innerHeight/window.innerWidth)).out(o2)
src(02)

src(o3).blend(src(o1).diff(o0).scale(1.01),0.1).out()

render(o2)

src(o1).modulate(osc(10,0.1,2)).mult()

src(o1).voronoi(10,1,5).brightness(()=>Math.random()*0.15)
  .modulatePixelate(noise(25, ()=> cc[0] ),100)
  .color(()=>cc[0], 2.5, 3.4).contrast(1.4)
  .out(o2)



src(o2).mask(shape(2)
  .rotate(()=>cc[0]))
  .modulateScrollY(noise(1))
  .colorama(()=>cc[0]*0.15).out(o1)

render(o1)
