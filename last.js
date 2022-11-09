shape(4,0.,0.5)
  .modulate(noise(()=>cc[0]))
  .color(50,20,90)
  .modulateRepeat().out()

voronoi(10,1,5).brightness(()=>Math.random()*0.5).out()

voronoi(10,1,5).brightness(()=>Math.random()*0.15)
  //.modulatePixelate(osc(()=>cc[0]),-0.2)
  .modulateScale(osc(2),-0.2)
  .color(1,1,0.5)
  .out(o0)


voronoi(10,1,5).brightness(()=>Math.random()*0.15)
  .modulatePixelate(noise(25, ()=> cc[1] ),100)
  .color(()=>cc[0], 2.5, 3.4).contrast(1.4)
  .out(o0)


src(o0).mask(shape(2).rotate(()=>cc[0])).modulateScrollY(noise(()=>cc[0])).colorama(()=>cc[0]*0.2).out(o1)
render(o1)









render(o0)
