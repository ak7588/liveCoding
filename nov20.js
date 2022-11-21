//woosh of colours
shape(5,.5,.5).modulate(noise(3,.1),.5).color(1,.3,.4).mult(osc(10,.1,()=>cc[1]+0.4*2)).rotate(1,-.1).colorama().diff(solid(1,.9,.531))
  .posterize(15).kaleid(()=> cc[0]*5).blend(o1,0).out(o1)
src(o1).modulateRepeat(noise(3)).modulateScale(o0).blend(o0).blend(o0)
  .blend(o0).blend(o0).out()
render(o0)
solid().out()

src(o1).modulateRepeat(osc(10),2).out()


shape(1,[0,1].smooth(),[0,1].reverse().smooth()).brightness([-1,1].smooth())
.modulateRotate(osc(Math.PI/2)).diff(osc(1,2,300).diff(gradient(1)).contrast([1,3]
                                                                             .reverse().fast())).out()

render()

src(o1).mult(noise(()=>cc[0]*cc[1], 0.6)).out(o2) // dark effect

src(o1).mult(noise(()=>cc[0]*cc[1], 0.6)).posterize( [1, 5, 15, 30] , 0.5 ).modulateScale(osc(4,-0.5,0).out(o3)
                         
                         
                         shape(2, 0.001, 0.03).color(50,5,30).modulateScrollY(noise(()=>cc[0]*4,0.2).scale(1,1,5))
  .add(shape(2, 0.001, 0.03).color(5,50,30).modulateScrollY(noise(()=>cc[1]*4,0.2)
                                                            .scale(1,1,5))
       .scrollY(0.2))
                         .diff(shape(2, 0.001, 0.03).color(50,30,5).modulateScrollY(noise(()=>cc[2]*4,0.2)
                                                    .scale(                                                                                                     
                                                   


shape(3).add(shape()).out(o3)

render(o0)

hush()

shape(3,0.2,0.2).add(shape(3,0.2,0.2).rotate(1)).modulate(osc(()=>cc[0]*2))
  .modulateRepeat(noise(()=>cc[1]))
	.modulateScale(o0).colorama(3)
.blend(o0).blend(o0)
  .out()

hush()























render()
