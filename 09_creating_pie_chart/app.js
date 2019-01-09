const data = [
  { platform: "Android", percentage: 50 },
  { platform: "Windows", percentage: 30 },
  { platform: "iOS", percentage: 20 }
];

const svgWidth = 500;
const svgHeight = 300;
const radius = Math.min(svgHeight, svgWidth) / 2;

// select svg
const svg = d3
  .select("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// create a group element to hold the pie chart
const g = svg.append("g").attr("transform", `translate(${radius}, ${radius})`);

const color = d3.scaleOrdinal(d3.schemeCategory10);

const pie = d3.pie().value(d => d.percentage);
const path = d3
  .arc()
  .outerRadius(radius)
  .innerRadius(0);

const arc = g
  .selectAll("arc")
  .data(pie(data))
  .enter()
  .append("g");

arc
  .append("path")
  .attr("d", path)
  .attr("fill", function(d) {
    return color(d.data.percentage);
  });

var label = d3
  .arc()
  .outerRadius(radius)
  .innerRadius(0);

arc
  .append("text")
  .attr("transform", function(d) {
    return "translate(" + label.centroid(d) + ")";
  })
  .attr("text-anchor", "middle")
  .text(function(d) {
    return d.data.platform + ":" + d.data.percentage + "%";
  });
