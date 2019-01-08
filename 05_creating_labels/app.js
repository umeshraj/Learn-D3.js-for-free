const dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

const svgWidth = 500,
  svgHeight = 300,
  barPadding = 5;
const barWidth = svgWidth / dataset.length;

// change svg size
const svg = d3
  .select("svg")
  .attr("class", "bar-chart")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

const barChart = svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("y", function(d) {
    return svgHeight - d;
  })
  .attr("height", function(d) {
    return d;
  })
  .attr("width", barWidth - barPadding)
  .attr("transform", function(d, i) {
    var translate = [barWidth * i, 0];
    return "translate(" + translate + ")";
  });

// Adding text to all bar charts
const text = svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text(d => d)
  .attr("y", function(d, i) {
    return svgHeight - d - 2;
  })
  .attr("x", function(d, i) {
    return barWidth * i;
  })
  .attr("fill", "#A64C38");
