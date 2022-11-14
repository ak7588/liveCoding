osc().modulate(noise(3))
  .mask(shape(5,0.5))
  .modulateScrollY(osc(()=>cc[0]*2))
  .color(3,48,24).kaleid(5).modulateRepeat(osc(10))
  .blend(o2,()=>cc[1]).out()

src(o0).pixelate().out(o2)

src(o2).modulate(noise(()=>cc[0]*3),1).brightness(-0.5).out(o3)

render(o3)

voronoi(30).colorama(3).out(o1)

