
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
shape(2, 0.001, 0.05).modulateScrollY(noise(()=> cc[0]*4,0.5).scale(()=>cc[1],1,5))
  .blend(o0, 0.3).mult(osc(10, 0.8, 1)
  .color(3.5, 3.0, 3.0)).blend(o0)
  //.modulateRotate(voronoi(50,1))
  //.diff(solid(()=>ccActual[3],()=>ccActual[3],()=>ccActual[3]))
  .invert(()=>ccActual[3])
  .blend(o0).posterize(5)
  .out()

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

voronoi(()=>cc[0]*20, ()=>cc[2]*0.2,10).color(()=>cc[4]*2,()=>cc[4]*4,2)
  .modulate(noise(()=>cc[1]*2))
  .modulateRotate(noise(()=>cc[3]*2)).modulateKaleid(o0)
  .modulateScrollX(noise())
  .out()

render()
