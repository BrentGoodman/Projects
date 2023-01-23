function makeCircles(amount, maxSize, x, y, spread, color) {
    for (let i = 0; i < amount; i++) {
      svg.append("circle")
        .attr("r", pickRandom(maxSize))
        .attr("cx", x + pickRandom(spread) - spread / 2)
        .attr("cy", y + pickRandom(spread) - spread / 2)
        .attr("fill", color)
        .attr("opacity", pickRandom(10) / 10);
    }
  }
  
  let stars = makeCircles(90, 2, 250, 250, 500, "white");
  let moon = svg.append("circle").attr("r", 125).attr("cx", 110).attr("cy", 250).attr("fill", "darkGrey");
  let craters = makeCircles(7, 10, 110, 200, 100, "grey");
  let earth = svg.append("circle").attr("r", 20).attr("cx", 300).attr("cy", 50).attr("fill", "steelBlue");
  let land = makeCircles(20, 3, 300, 50, 25, "green");
  
  function makeApolloLunarModule() {
    return svg.append("rect").attr("width", 0).attr("height", 0).attr("fill", "white").attr("x", 302).attr("y", 50);
  }
  
  let ascentStage = makeApolloLunarModule();
  let descentStage = makeApolloLunarModule();
  let leftLeg = makeApolloLunarModule();
  let rightLeg = makeApolloLunarModule();
  
  function moonLanding() {
    '// change the easeChoice to a different item from easeList';
    let easeList = [d3.easeQuadIn, d3.easeCubicOut, d3.easeLinear, d3.easeElastic]
    let easeChoice = easeList[0]
  
    ascentStage.transition().duration(5000).attr("width", 6).attr("height", 5).attr("x", 102).attr("y", 145).ease(easeChoice);
    descentStage.transition().duration(5000).attr("width", 12).attr("height", 11).attr("x", 99).attr("y", 150).ease(easeChoice);
    leftLeg.transition().duration(5000).attr("width", 2).attr("height", 9).attr("x", 97).attr("y", 160).ease(easeChoice);
    rightLeg.transition().duration(5000).attr("width", 2).attr("height", 9).attr("x", 111).attr("y", 160).ease(easeChoice);
  }
  
  moon.on("click", moonLanding);
  