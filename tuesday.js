 osc()
  .rotate(.4)
  .mask(noise(()=>cc[0]+cc[1], 0.5).,5))
  .color(()=>cc[3],()=>cc[2],5).
  .add(noise(()=>cc[0]+cc[1], 0.5))
  .out()


shape(100).mult(o0).modulateScrollX(noise(()=>cc[0]*5)).out(o3)

shape(100).out()

render()

voronoi(1,2,1).modulateScale(osc(()=>cc[0]),-0.2).modulateKaleid(osc(11,0.5,0),50)
  .color(1,2,3).color(()=>cc[3],()=>cc[2]).out()

src(o0)
  .blend(src(o0).diff(s0).scale(.99),1.1)
  .modulatePixelate(noise(2,0.01).pixelate(16,16),1024)
  .out(o4)

src(o1).mult(o2).mult(noise(10,5)).out(o3)

voronoi(5,1).modulate(osc(10,1)).posterize(10).color(1,2,2).luma(0.2,0.1).out(o1)

voronoi(cc[1],5).modulate(osc(10,1)).modulateKaleid(osc(()=>cc[1])).color(1,2,2)
  .posterize(10)
  .luma(0.2,0.1).out(o2)

render()
