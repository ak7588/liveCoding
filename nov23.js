voronoi(3).modulate(noise(()=>cc[0]*5+2)).color(50,10)
  .colorama().posterize(2).diff(solid(1,1,1)).out()


hush()

////////amina likey

shape(()=>cc[0]*5+2).modulate(noise(2))
  .add(osc(1,0.5,0.5).modulate(noise(1)).diff(solid(1,1,1)).modulateRepeat(osc(0.2)))
  .posterize(4).modulateRepeat(shape(()=>cc[0]*20)).out()



//////wavey colours
shape(2).modulateScrollY(noise(0.3,0.7))
  .color(Math.random(),Math.random(),Math.random())
  .scale(()=>cc[0]*1.5).diff(osc(3,0.5,7).thresh()
  .modulate(noise(2)).mult(gradient(2))).diff(solid(1,1,1
                     )).modulate(osc(10)).
  modulateScale(osc(1)).out()

shape(5,.5,.5).modulate(noise(3,.1),.5).color(1,.3,.4)
  .mult(osc(10,.1,()=>cc[1]+0.4*2)).rotate(1,-.1).colorama()
  .diff(solid(1,.9,.531)).posterize(15).kaleid(()=> cc[0]*5)
  .blend(o1,0).out(o1)

src(o1).modulateRepeat(noise(3)).modulateScale(o0)
  .blend(o0).blend(o0).blend(o0).blend(o0).out()

// zam 
shape(2).modulateScrollY(noise(0.3,0.7))
  .color(Math.random(),Math.random(),Math.random())
  .scale(()=>cc[0]*0.5+0.1).diff(src(o0).rotate(1,-1)).out()

shape(4,.6,.3).color(80,5,20).modulateRepeat(osc(10))
  .modulate(noise(()=>cc[0]*3)).posterize(15).pixelate(200,200).out(o0)

///i like colour pallletetetet 
osc(.7,1,0.9).blend(shape(()=>cc[0]*5,0.2,.5).mask(osc())
    .rotate(1,-1),0.4)
  .color(1,.3,.4).colorama(.4).posterize(2).diff(solid(1,1,1)).rotate(0.1,-.01).out()
