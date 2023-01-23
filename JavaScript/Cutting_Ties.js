var water = svg.append('rect').attr('width', 500).attr('height', 500).attr('y', 50).attr('fill', 'deepskyblue');
var line = svg.append('rect').attr('width', 10).attr('height', 350).attr('x', 145).attr('y', 150).attr('fill', 'grey');
var buoy = svg.append('circle').attr('r', 30).attr('cx', 150).attr('cy', 150).attr('fill', 'white');
function cutLine(___) {
  line.remove();
  buoy.transition().attr('cy', 40).ease(d3.easeElastic).duration(4000);
};
line.on('click', cutLine);