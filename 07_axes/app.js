const dataset = [10, 20, 30, 40, 50];

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

const xScale = d3
  .scaleLinear()
  .domain([0, dataset.length])
  .range([0, svgWidth]);

const yScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset)])
  .range([svgHeight, 0]);

const xAxis = d3.axisBottom().scale(xScale);
const yAxis = d3.axisLeft().scale(yScale);
svg
  .append("g")
  .attr("transform", "translate(50, 10)")
  .call(yAxis);

const xAxisTranslate = svgHeight - 20;
svg
  .append("g")
  .attr("transform", `translate(50, ${xAxisTranslate})`)
  .call(xAxis);

const barChart = svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("y", d => yScale(d))
  .attr("height", d => svgHeight - yScale(d))
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
