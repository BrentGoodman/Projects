var rectangles = d3.selectAll('rect');
function hideRectangles(___) {
  rectangles.transition().attr('height', 0).attr('width', 0);
};
rectangles.on('click', hideRectangles);