const svgWidth = 600;
const svgHeight = 500;

var svg = d3
  .select("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight)
  .attr("class", "svg-container");

// drawing a line
const line = svg
  .append("line")
  .attr("x1", 100)
  .attr("y1", 100)
  .attr("x2", 200)
  .attr("y2", 150)
  .style("stroke", "red")
  .style("stroke-width", 3);

// drawing a rectangle
const rect = svg
  .append("rect")
  .attr("x", 300)
  .attr("y", 300)
  .attr("height", 20)
  .attr("width", 75)
  .attr("fill", "red")
  .attr("stroke", "darkgray");

// draw a circle
const circle = svg
  .append("circle")
  .attr("cx", 150)
  .attr("cy", 250)
  .attr("r", 90)
  .attr("fill", "purple");
