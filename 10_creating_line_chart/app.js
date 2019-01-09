//API to fetch historical data of Bitcoin Price Index
const api =
  "https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-12-31&end=2018-04-01";

// Loading data when DOM has been loaded
document.addEventListener("DOMContentLoaded", function(event) {
  fetch(api)
    .then(response => response.json())
    .then(responseData => {
      // console.log(responseData);
      const parsedData = parseData(responseData);
      // console.log(parsedData);
      drawChart(parsedData);
    });
});

// parse data into key-value pairs
function parseData(data) {
  let arr = [];
  for (let i in data.bpi) {
    arr.push({
      date: new Date(i),
      value: +data.bpi[i]
    });
  }
  return arr;
}

// draw the chart
function drawChart(data) {
  const svgWidth = 600;
  const svgHeight = 400;
  const margin = { top: 20, right: 20, bottom: 30, left: 50 };
  const width = svgWidth - margin.left - margin.right;
  const height = svgHeight - margin.top - margin.bottom;

  const svg = d3
    .select("svg")
    .attr("width", width)
    .attr("height", height);

  const g = svg
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.right})`);

  const xScale = d3
    .scaleTime()
    .domain(d3.extent(data, d => d.date))
    .rangeRound([0, width]);

  const yScale = d3
    .scaleLinear()
    .domain(d3.extent(data, d => d.value))
    .rangeRound([height, 0]);

  const line = d3
    .line()
    .x(d => xScale(d.date))
    .y(d => yScale(d.value));

  g.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-linejoin", "round")
    .attr("stroke-linecap", "round")
    .attr("stroke-width", 1.5)
    .attr("d", line);

  // g.append("path")
  // .datum(data)
  // .attr("fill", "none")
  // .attr("stroke", "steelblue")
  // .attr("stroke-linejoin", "round")
  // .attr("stroke-linecap", "round")
  // .attr("stroke-width", 1.5)
  // .attr("d", line);
}
