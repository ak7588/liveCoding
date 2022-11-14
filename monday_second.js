osc().modulate(noise(3))
  .mask(shape(5,0.5))
  .modulateScrollY(osc(()=>cc[0]*2))
  .color(3,48,24).kaleid(5).modulateRepeat(osc(10))
  .blend(o2,()=>cc[1])
  //.colorama(8)
  .out()

src(o0).pixelate().out(o2)

src(o1).modulate(noise(()=>cc[0]*3),1).brightness(-0.1).blend(o3,0.5).blend(o3,0.9).out(o3)

src(o3).mask(shape(ccActual[1])).out(o2)

render()

shape(()=>cc[0]*2).mask(voronoi(30)).rotate(()=>time).colorama(3).out(o1)
